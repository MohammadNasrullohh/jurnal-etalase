'use client'

import React, { useEffect } from 'react'

interface JurnalDetailModalProps {
  id: string | null
  isOpen: boolean
  onClose: () => void
}

export const JurnalDetailModal: React.FC<JurnalDetailModalProps> = ({
  id,
  isOpen,
  onClose
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm" style={{ fontFamily: 'Poppins' }}>
      <div 
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-[760px] max-h-[90vh] bg-[#F1F6FC] rounded-[24px] shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-[#9CA3AF] hover:text-[#142B42] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Inner Content Container */}
        <div className="p-8 sm:p-10 pb-8">
          
          {/* Header */}
          <div className="mb-6 relative">
            <div className="inline-block bg-[#F7921C] text-white px-6 py-1.5 rounded-full font-bold text-[13px] mb-6 shadow-sm">
              Kategori
            </div>
            
            <h2 className="text-[#142B42] text-[22px] sm:text-[24px] font-bold leading-[1.4] mb-5 pr-12">
              Sosialisasi pengawasan partisipasif bersama mahasiswa
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-[14px] text-[#71717A] font-medium">
              <div className="flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span>16 September 2026</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                <span>pemilu, pengawasan, bawaslu</span>
              </div>
            </div>
          </div>

          <hr className="border-[#E2E8F0] mb-8 -mx-10" />

          {/* Deskripsi */}
          <div className="text-[14px] text-[#475569] leading-[1.8] text-justify mb-10 font-medium">
            Kegiatan diawali pembukaan oleh ketua panitia, dilanjutkan pemaparan materi mengenai peran masyarakat dalam pengawasan tahapan pemilu. Sesi tanya jawab berlangsung selama 40 menit dengan 12 penanya. Peserta yang hadir sebanyak 85 orang dari 6 perguruan tinggi. Kegiatan ditutup dengan penandatanganan komitmen pengawasan partisipatif.
          </div>

          {/* Dokumentasi */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5 text-[#64748B] font-bold text-[15px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              Dokumentasi
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img src="/assets/banner-image.jpg" alt="Dokumentasi 1" className="w-full h-[90px] object-cover rounded-[16px]" />
              <img src="/assets/banner-image.jpg" alt="Dokumentasi 2" className="w-full h-[90px] object-cover rounded-[16px]" />
              <img src="/assets/banner-image.jpg" alt="Dokumentasi 3" className="w-full h-[90px] object-cover rounded-[16px]" />
            </div>
          </div>

          {/* Dokumen Pendukung */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5 text-[#64748B] font-bold text-[15px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Dokumen pendukung
            </div>
            <div className="border border-[#CBD5E1] rounded-[16px] bg-transparent overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-[#CBD5E1] hover:bg-black/5 cursor-pointer transition-colors group">
                <div className="flex items-center gap-4 text-[#334155] font-bold text-[14px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                  Undangan kegiatan.pdf
                </div>
                <div className="flex items-center gap-5 text-[#94A3B8] text-[13px] font-bold">
                  240 KB
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#F7921C] transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
              </div>
              <div className="flex items-center justify-between p-5 hover:bg-black/5 cursor-pointer transition-colors group">
                <div className="flex items-center gap-4 text-[#334155] font-bold text-[14px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                  Daftar hadir peserta.pdf
                </div>
                <div className="flex items-center gap-5 text-[#94A3B8] text-[13px] font-bold">
                  240 KB
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#F7921C] transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Pihak Terkait */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5 text-[#64748B] font-bold text-[15px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Pihak Terkait
            </div>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-4">
              <div className="flex items-center pr-6 bg-[#F7921C]/10 rounded-full">
                <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-white/90 to-white/10 p-[6px] flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-[#F7921C] text-white flex items-center justify-center font-bold text-[13px]">AW</div>
                </div>
                <span className="ml-3 text-[#F7921C] font-bold text-[15px]">Ahmad Wahyudi</span>
              </div>
              <div className="flex items-center pr-6 bg-[#507CF1]/10 rounded-full">
                <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-white/90 to-white/10 p-[6px] flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-[#507CF1] text-white flex items-center justify-center font-bold text-[13px]">EM</div>
                </div>
                <span className="ml-3 text-[#507CF1] font-bold text-[15px]">Exca Mutiara</span>
              </div>
            </div>
          </div>

          {/* Publikasi Berita */}
          <div className="mb-8">
            <div className="flex items-center justify-between p-5 border border-[#CBD5E1] rounded-[16px] bg-transparent hover:bg-black/5 transition-colors cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                </div>
                <div>
                  <div className="text-[#334155] font-bold text-[15px] mb-1 group-hover:text-[#507CF1] transition-colors">Publikasi Berita</div>
                  <div className="text-[#64748B] text-[13px] font-medium">bawaslu.go.id/sosialisasi-pengawasan</div>
                </div>
              </div>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#F7921C] transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </div>
          </div>

          <div className="text-[12px] text-[#94A3B8] font-medium pt-2">
            Dibuat oleh exca 16 September, 14.20
          </div>

        </div>
      </div>
    </div>
  )
}
