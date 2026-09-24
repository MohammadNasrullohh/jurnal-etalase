import { db } from "./src/shared/lib/db";
import { jurnal } from "./drizzle/schema";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

async function run() {
  await db.insert(jurnal).values([
    {
      source_id: uuidv4(),
      judul: "Sosialisasi Pengawasan Pemilu Partisipatif dengan Toko Masyarakat",
      tanggal_kegiatan: "2026-09-16",
      kategori: "sosialisasi",
      is_published: true,
      redaksi: "Staf Humas",
      divisi: "Humas",
      workflow_status: "published",
      pihak_terkait: ["KPU", "Kepolisian", "Kejaksaan"],
      dokumentasi: [{type: "image", url: "https://images.unsplash.com/photo-1541872575884-a53966085f1c?q=80&w=800"}],
      link_publikasi: "https://berita.bawaslu.go.id/1"
    },
    {
      source_id: uuidv4(),
      judul: "Rapat Koordinasi Mingguan Bawaslu",
      tanggal_kegiatan: "2026-09-15",
      kategori: "rapat rutin",
      is_published: false,
      redaksi: "Staf Humas",
      divisi: "Humas",
      workflow_status: "draft",
      pihak_terkait: ["Internal"],
      dokumentasi: [{type: "image", url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"}],
      link_publikasi: ""
    },
    {
      source_id: uuidv4(),
      judul: "Patroli Pengawasan Kawal Hak Pilih di Pesisir Selatan",
      tanggal_kegiatan: "2026-09-14",
      kategori: "pengawasan",
      is_published: true,
      redaksi: "Staf Humas",
      divisi: "Humas",
      workflow_status: "published",
      pihak_terkait: ["TNI", "Polri"],
      dokumentasi: [{type: "image", url: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=800"}],
      link_publikasi: "https://berita.bawaslu.go.id/3"
    }
  ]);
  console.log("Seeded database with 3 dummy journals.");
}
run().catch(console.error).then(() => process.exit(0));
