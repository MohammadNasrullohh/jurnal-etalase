'use client'

import React, { useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { JurnalCard } from '@/entities/jurnal/ui/jurnal-card'

interface JurnalListProps {
  q: string
  kategori: string
  activeId: string | null
  setActiveId: (id: string | null) => void
  onActiveDateChange: (date: string) => void
  onCardClick: (id: string) => void
  onHover?: (id: string, date: string) => void
  onLeaveHover?: () => void
  lineTargetId?: string | null
  scrollContainerRef?: React.RefObject<HTMLDivElement>
  navigatingRef?: React.MutableRefObject<boolean>
}

export const JurnalList: React.FC<JurnalListProps> = ({
  q,
  kategori,
  activeId,
  setActiveId,
  onActiveDateChange,
  onCardClick,
  onHover,
  onLeaveHover,
  lineTargetId,
  scrollContainerRef,
  navigatingRef,
}) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfiniteQuery({
    queryKey: ['jurnals', q, kategori],
    queryFn: ({ pageParam = '' }) => {
      const url = new URL('/api/jurnal', window.location.origin)
      if (q) url.searchParams.set('q', q)
      if (kategori) url.searchParams.set('kategori', kategori)
      if (pageParam) url.searchParams.set('cursor', pageParam as string)
      url.searchParams.set('view', 'summary')
      return fetch(url.toString()).then(r => {
        if (!r.ok) throw new Error('Network error')
        return r.json()
      })
    },
    getNextPageParam: (lastPage) => lastPage?.pagination?.next_cursor || undefined,
    initialPageParam: '',
  })

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (navigatingRef?.current) return
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.id.replace('jurnal-card-', '')
            const date = entry.target.getAttribute('data-tanggal')
            setActiveId(cardId)
            if (date) {
              onActiveDateChange(date)
            }
          }
        })
      },
      {
        root: scrollContainerRef?.current ?? null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    )

    const cards = document.querySelectorAll('.jurnal-card')
    cards.forEach((card) => observerRef.current?.observe(card))

    return () => observerRef.current?.disconnect()
  }, [data, setActiveId, onActiveDateChange, scrollContainerRef])

  // MOCK DATA FOR FRONTEND PURPOSES
  const allItems = Array.from({ length: 6 }).map((_, i) => ({
    id: `mock-${i}`,
    judul: 'Penerimaan Data Parpol Berkelanjutan dari KPU Kebumen',
    tanggal_kegiatan: '2026-07-07',
    kategori: 'rapat',
    thumbnail_url: null,
    pihak_terkait: [],
    tags: [{ nama: 'Parpol' }, { nama: 'Pengawasan' }]
  }))

  return (
    <div className="flex flex-col w-full pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allItems.map((item, idx) => {
          const delayMs = idx < 5 ? `${idx * 120 + 200}ms` : '0ms'
          return (
            <JurnalCard
              key={item.id}
              id={item.id}
              judul={item.judul}
              tanggal_kegiatan={item.tanggal_kegiatan}
              kategori={item.kategori}
              thumbnail_url={item.thumbnail_url}
              pihak_terkait={item.pihak_terkait}
              tags={item.tags}
              isActive={activeId === item.id}
              isLineTarget={lineTargetId === item.id}
              onClick={() => onCardClick(item.id)}
              onHover={onHover}
              onLeaveHover={onLeaveHover}
              staggerDelay={delayMs}
            />
          )
        })}
      </div>
      {isFetchingNextPage && (
        <div className="py-6 text-center text-[var(--color-text-muted)] font-mono text-xs">
          Memuat lebih banyak...
        </div>
      )}

      {/* Pagination (Matching Figma exactly) */}
      <div className="flex justify-center items-center mt-12 mb-8" style={{ fontFamily: 'Poppins' }}>
        <div className="inline-flex items-center gap-2 px-3.5 py-[6px] border border-[#C6D2E8] rounded-full bg-white backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          {/* Prev Button */}
          <button className="w-[42px] h-[38px] flex items-center justify-center rounded-[12px] border border-[#DCE4F0] bg-white text-[#142B42] hover:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
          
          {/* Page 1 (Active) */}
          <button className="w-[42px] h-[38px] flex items-center justify-center rounded-[12px] bg-[#F7921C] text-white font-bold text-[15px]">
            1
          </button>
          
          {/* Page 2 */}
          <button className="w-[42px] h-[38px] flex items-center justify-center rounded-[12px] border border-[#DCE4F0] bg-white text-[#142B42] font-bold text-[15px] hover:bg-gray-50 transition-colors">
            2
          </button>
          
          {/* Ellipsis */}
          <span className="w-[42px] h-[38px] flex items-center justify-center rounded-[12px] border border-[#DCE4F0] bg-white text-[#142B42] font-bold text-[15px]">
            ...
          </span>
          
          {/* Page 15 */}
          <button className="w-[42px] h-[38px] flex items-center justify-center rounded-[12px] border border-[#DCE4F0] bg-white text-[#142B42] font-bold text-[15px] hover:bg-gray-50 transition-colors">
            15
          </button>
          
          {/* Next Button */}
          <button className="w-[42px] h-[38px] flex items-center justify-center rounded-[12px] border border-[#DCE4F0] bg-white text-[#142B42] hover:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
