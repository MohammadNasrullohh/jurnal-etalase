import { db } from '@/shared/lib/db'
import { jurnal } from '../../../../drizzle/schema'
import { sql, eq, and } from 'drizzle-orm'

export interface MonthlyTrendItem {
  month: number
  total: number
}

export interface ActivityHighlight {
  id: string
  judul: string
  tanggal_kegiatan: string
  kategori: string
  thumbnail_url: string | null
  link_publikasi: string | null
}

export interface KpiSummary {
  total_kegiatan: number
  total_mitra: number
  published_media_count: number
  top_category: {
    kategori: string
    total: number
    percentage: number
  } | null
}

export interface JurnalStatsAnalytics {
  stats: Record<string, number>
  mitra_stats: Record<string, number>
  monthly_trend: MonthlyTrendItem[]
  division_stats: Record<string, number>
  kpi_summary: KpiSummary
  recent_highlights: ActivityHighlight[]
}

/** Ambil semua tahun yang punya data jurnal published */
export async function getJurnalYears(): Promise<number[]> {
  const rows = await db
    .select({
      year: sql<number>`EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan})::int`,
    })
    .from(jurnal)
    .where(and(eq(jurnal.is_published, true), eq(jurnal.workflow_status, 'published')))
    .groupBy(sql`EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan})`)
    .orderBy(sql`EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan})`)

  return rows.map(r => r.year)
}

/** Hitung analitik jurnal lengkap untuk tahun tertentu */
export async function getJurnalStatsByYear(year: number): Promise<JurnalStatsAnalytics> {
  // 1. Kategori
  const catRows = await db
    .select({
      kategori: jurnal.kategori,
      total: sql<number>`COUNT(*)::int`,
    })
    .from(jurnal)
    .where(
      and(
        eq(jurnal.is_published, true),
        sql`EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan}) = ${year}`
      )
    )
    .groupBy(jurnal.kategori)

  const stats: Record<string, number> = Object.fromEntries(catRows.map(r => [r.kategori, r.total]))
  const totalKegiatan = catRows.reduce((acc, r) => acc + r.total, 0)

  // 2. Tren Bulanan (1 - 12)
  const monthRows = await db
    .select({
      month: sql<number>`EXTRACT(MONTH FROM ${jurnal.tanggal_kegiatan})::int`,
      total: sql<number>`COUNT(*)::int`,
    })
    .from(jurnal)
    .where(
      and(
        eq(jurnal.is_published, true),
        sql`EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan}) = ${year}`
      )
    )
    .groupBy(sql`EXTRACT(MONTH FROM ${jurnal.tanggal_kegiatan})`)

  const monthMap = new Map<number, number>()
  for (const r of monthRows) {
    monthMap.set(r.month, r.total)
  }
  const monthly_trend: MonthlyTrendItem[] = Array.from({ length: 12 }, (_, i) => {
    const m = i + 1
    return {
      month: m,
      total: monthMap.get(m) ?? 0,
    }
  })

  // 3. Divisi
  const divRows = await db
    .select({
      divisi: sql<string>`COALESCE(NULLIF(TRIM(${jurnal.divisi}), ''), 'Umum / Sekretariat')`,
      total: sql<number>`COUNT(*)::int`,
    })
    .from(jurnal)
    .where(
      and(
        eq(jurnal.is_published, true),
        sql`EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan}) = ${year}`
      )
    )
    .groupBy(sql`COALESCE(NULLIF(TRIM(${jurnal.divisi}), ''), 'Umum / Sekretariat')`)

  const division_stats: Record<string, number> = Object.fromEntries(divRows.map(r => [r.divisi, r.total]))

  // 4. Publikasi Media
  const mediaCountRes = await db
    .select({
      total: sql<number>`COUNT(*)::int`,
    })
    .from(jurnal)
    .where(
      and(
        eq(jurnal.is_published, true),
        sql`EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan}) = ${year}`,
        sql`${jurnal.link_publikasi} IS NOT NULL AND TRIM(${jurnal.link_publikasi}) != ''`
      )
    )
  const published_media_count = mediaCountRes[0]?.total ?? 0

    // 5. Total Mitra Unik (dari pihak_terkait) & Mitra Stats
  let total_mitra = 0
  const mitra_stats: Record<string, number> = {
    'Pemerintah Daerah': 0,
    'Instansi Pendidikan': 0,
    'Organisasi Masyarakat': 0,
    'Swasta / Lainnya': 0
  }

  try {
    const partnerRes: any = await db.execute(sql`
      SELECT partner->>'instansi' as instansi, partner->>'nama' as nama
      FROM ${jurnal},
      jsonb_array_elements(
        CASE
          WHEN jsonb_typeof(${jurnal.pihak_terkait}) = 'array' THEN ${jurnal.pihak_terkait}
          ELSE '[]'::jsonb
        END
      ) AS partner
      WHERE ${jurnal.is_published} = true
        AND EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan}) = ${year}
    `)
    
    const uniqueMitras = new Set<string>()
    
    if (partnerRes && partnerRes.rows) {
      for (const row of partnerRes.rows) {
        const val = (row.instansi || row.nama || '').toString().trim().toLowerCase()
        if (!val) continue
        uniqueMitras.add(val)
        
        // Categorize
        if (val.match(/pemda|dinas|pemerintah|bawaslu|kpu|kementerian|badan|desa|camat|kab|provinsi/i)) {
          mitra_stats['Pemerintah Daerah']++
        } else if (val.match(/sekolah|universitas|kampus|institut|akademi|sma|smp|sd|tk|politeknik|madrasah/i)) {
          mitra_stats['Instansi Pendidikan']++
        } else if (val.match(/lsm|ormas|forum|komunitas|yayasan|pemuda|masyarakat|pkk|karang taruna/i)) {
          mitra_stats['Organisasi Masyarakat']++
        } else {
          mitra_stats['Swasta / Lainnya']++
        }
      }
    }
    
    total_mitra = uniqueMitras.size
  } catch (e) {
    console.error('Error fetching mitra:', e)
    total_mitra = 0
  }

  // Top Kategori
  let topCategory: KpiSummary['top_category'] = null
  if (catRows.length > 0 && totalKegiatan > 0) {
    const sorted = [...catRows].sort((a, b) => b.total - a.total)
    const top = sorted[0]
    topCategory = {
      kategori: top.kategori,
      total: top.total,
      percentage: Math.round((top.total / totalKegiatan) * 100),
    }
  }

  const kpi_summary: KpiSummary = {
    total_kegiatan: totalKegiatan,
    total_mitra,
    published_media_count,
    top_category: topCategory,
  }

  // 6. Recent Highlights (Max 4 kegiatan terbaru)
  const highlightRows = await db
    .select({
      id: jurnal.id,
      judul: jurnal.judul,
      tanggal_kegiatan: jurnal.tanggal_kegiatan,
      kategori: jurnal.kategori,
      dokumentasi: jurnal.dokumentasi,
      link_publikasi: jurnal.link_publikasi,
    })
    .from(jurnal)
    .where(
      and(
        eq(jurnal.is_published, true),
        sql`EXTRACT(YEAR FROM ${jurnal.tanggal_kegiatan}) = ${year}`
      )
    )
    .orderBy(sql`${jurnal.tanggal_kegiatan} DESC`, sql`${jurnal.id} DESC`)
    .limit(4)

  const recent_highlights: ActivityHighlight[] = highlightRows.map(r => {
    const docs = Array.isArray(r.dokumentasi) ? r.dokumentasi : []
    const firstImg = docs.find((d: any) => d && (d.type === 'image' || d.url))
    return {
      id: r.id,
      judul: r.judul,
      tanggal_kegiatan: r.tanggal_kegiatan,
      kategori: r.kategori,
      thumbnail_url: firstImg?.url ?? null,
      link_publikasi: r.link_publikasi ?? null,
    }
  })

  return {
    stats,
    mitra_stats,
    monthly_trend,
    division_stats,
    kpi_summary,
    recent_highlights,
  }
}

