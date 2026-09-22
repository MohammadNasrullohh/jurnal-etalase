import React, { useState } from 'react';

export default function Approval() {
  const [selectedQueue, setSelectedQueue] = useState(1);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div className="px-8 pt-8 pb-8">
      <div className="flex flex-row gap-8">
        
        {/* Left Column: Queue List */}
        <div className="w-full md:w-[469px] flex flex-col shrink-0">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[20px] font-bold text-[#142B42]">Antrean baru</h3>
              <span className="bg-[#D92D20] text-white text-[12px] font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
            </div>
            <p className="text-[#5D6A77] text-[13px]">Pilih jurnal untuk mulai meninjau</p>
          </div>
          
          <div className="flex flex-col gap-4 overflow-y-auto pr-2 pb-10">
            {/* Card 1 */}
            <div 
              onClick={() => setSelectedQueue(1)}
              className={`bg-white rounded-[11px] border ${selectedQueue === 1 ? 'border-[#075599] shadow-sm' : 'border-[#E2E8F0] shadow-sm'} p-5 cursor-pointer transition-all hover:border-[#075599]/50`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2.5 py-1 rounded-[6px]">Menunggu Review</span>
                <span className="text-[#7B8EA0] text-[10px] font-medium">15 Agustus 2026, 10:24 WIB</span>
              </div>
              <h4 className="text-[#142B42] text-[13px] font-bold mb-5 leading-snug">Sosialisasi Pengawasan Pemilu Partisipatif dengan Toko Masyarakat</h4>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-5 text-[10px] text-[#7B8EA0] font-medium leading-[1.3]">
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 
                    <span>Staf<br/>Humas</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> 
                    <span>Divisi Pengawasan &<br/>Humas</span>
                  </div>
                </div>
                <button className="w-[102px] h-[28px] shrink-0 flex items-center justify-center bg-[#F7921C] text-white text-[10px] font-bold rounded-[6px] hover:bg-[#e08419] transition-colors">Tinjau jurnal</button>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => setSelectedQueue(2)}
              className={`bg-white rounded-[11px] border ${selectedQueue === 2 ? 'border-[#075599] shadow-sm' : 'border-[#E2E8F0] shadow-sm'} p-5 cursor-pointer transition-all hover:border-[#075599]/50`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2.5 py-1 rounded-[6px]">Menunggu Review</span>
                <span className="text-[#7B8EA0] text-[10px] font-medium">15 Agustus 2026, 10:24 WIB</span>
              </div>
              <h4 className="text-[#142B42] text-[13px] font-bold mb-5 leading-snug">Sosialisasi Pengawasan Pemilu Partisipatif dengan Toko Masyarakat</h4>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-5 text-[10px] text-[#7B8EA0] font-medium leading-[1.3]">
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> 
                    <span>Staf<br/>Humas</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> 
                    <span>Divisi Pengawasan &<br/>Humas</span>
                  </div>
                </div>
                <button className="w-[102px] h-[28px] shrink-0 flex items-center justify-center bg-[#F7921C] text-white text-[10px] font-bold rounded-[6px] hover:bg-[#e08419] transition-colors">Tinjau jurnal</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Outer wrapper */}
        <div className="flex-1">
          <div className="w-full bg-white rounded-[16px] border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col min-h-full">
            {/* Header */}
            <div className="bg-[#0F3963] p-8 pb-6 text-white rounded-t-[16px] shrink-0">
              {!isApproved ? (
                <div className="w-full md:w-[456px] h-[125px] flex flex-col justify-between">
                  <h3 className="text-[24px] font-semibold leading-normal text-white">Sosialisasi Pengawasan Pemilu Partisipatif dengan Toko Masyarakat</h3>
                  <div className="flex items-center gap-6 text-[12px] text-white">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      16 September 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                      Pemilu, Pengawasan, Bawaslu
                    </div>
                  </div>
                </div>
              ) : (
                <h3 className="text-[24px] font-semibold leading-normal text-white">
                  Sosialisasi Pengawasan Pemilu Partisipatif dengan Toko Masyarakat
                </h3>
              )}
            </div>

            {/* Content — no scroll here, flows naturally */}
            <div className="flex-1 p-8">
              {/* Ringkasan Jurnal */}
              <div className="mb-6 border-b border-[#E2E8F0] pb-6">
                <h4 className="text-[#142B42] text-[14px] font-bold mb-3">Ringkasan Jurnal</h4>
                <p className="text-[#5D6A77] text-[12px] leading-relaxed text-justify">
                  Kegiatan diawali pembukaan oleh ketua panitia, dilanjutkan pemaparan materi mengenai peran masyarakat dalam pengawasan tahapan pemilu. Sesi tanya jawab berlangsung selama 40 menit dengan 12 penanya. Peserta yang hadir sebanyak 85 orang dari 6 perguruan tinggi. Kegiatan ditutup dengan penandatanganan komitmen pengawasan partisipatif.
                </p>
              </div>

              {/* Dokumentasi */}
              <div className="mb-6">
                <h5 className="flex items-center gap-2 text-[#142B42] text-[14px] font-bold mb-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  Dokumentasi
                </h5>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-[90px] bg-gray-200 rounded-[8px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=300&q=80" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 h-[90px] bg-gray-200 rounded-[8px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&q=80" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 h-[90px] bg-gray-200 rounded-[8px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=300&q=80" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Dokumen pendukung */}
              <div className="mb-6">
                <h5 className="text-[#142B42] text-[14px] font-bold mb-3 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Dokumen pendukung
                </h5>
                <div className="flex flex-col border border-[#0F3963] rounded-[11px] overflow-hidden bg-white">
                  <div className="flex items-center justify-between p-3.5 bg-white border-b border-[#0F3963] cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B8EA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                      <span className="text-[#142B42] text-[12px] font-medium">Undangan kegiatan.pdf</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#0F3963] text-[14px] font-semibold">240 KB</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B8EA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                      <span className="text-[#142B42] text-[12px] font-medium">Undangan kegiatan.pdf</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#0F3963] text-[14px] font-semibold">240 KB</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pihak Terkait */}
              <div className="mb-6">
                <h5 className="text-[#142B42] text-[14px] font-bold mb-3 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Pihak Terkait
                </h5>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Resta, Baling"
                    readOnly
                    className="w-full h-[48px] border border-[#0F3963] rounded-[12px] px-4 text-[#142B42] text-[12px] font-medium bg-white outline-none cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Publikasi Berita */}
              <div className="mb-6">
                <h5 className="text-[#142B42] text-[14px] font-bold mb-3 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                  Publikasi Berita
                </h5>
                <div className="relative">
                  <input
                    type="url"
                    defaultValue="Bawaslu.go.id/sosialisasi-pengawasan"
                    readOnly
                    className="w-full h-[48px] border border-[#0F3963] rounded-[12px] px-4 pr-12 text-[#142B42] text-[12px] font-medium bg-white outline-none cursor-pointer"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 16v4H6v-4H4v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4h-2z" fill="#0F3963"/>
                      <path d="M13 11V3l3 3 1.4-1.4L12 0 6.6 4.6 8 6l3-3v8h2z" fill="#0F3963"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-8 pb-8 bg-white rounded-b-[16px] flex gap-3 w-full">
              {!isApproved ? (
                <>
                  <button 
                    onClick={() => setIsRejectModalOpen(true)}
                    className="flex-1 flex items-center justify-center gap-2 h-[40px] rounded-[6px] border border-[#D92D20] text-[#D92D20] text-[12px] font-bold bg-white hover:bg-[#FEF3F2] transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    Tolak/Kembalikan
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 h-[40px] rounded-[6px] border border-[#0F3963] text-[#0F3963] text-[12px] font-bold bg-white hover:bg-gray-50 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                    Edit Jurnal
                  </button>
                  <button 
                    onClick={() => setIsApproveModalOpen(true)}
                    className="flex-1 flex items-center justify-center gap-2 h-[40px] rounded-[6px] bg-[#EE8810] text-white text-[12px] font-bold hover:bg-[#d4780e] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Setuju jurnal
                  </button>
                </>
              ) : (
                <>
                  <button className="flex-1 flex items-center justify-center h-[40px] rounded-[6px] border border-[#0F3963] text-[#0F3963] text-[12px] font-bold bg-white hover:bg-gray-50 transition-colors">
                    Kembali ke Antrean
                  </button>
                  <button className="w-[325px] flex items-center justify-center gap-2 h-[40px] rounded-[6px] bg-[#EE8810] text-white text-[12px] font-bold hover:bg-[#d4780e] transition-colors">
                    Tinjau Jurnal berikutnya
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Reject Modal */}
      {isRejectModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[10px] p-8 w-[734px] shadow-2xl flex flex-col">
            
            {/* Header Icon */}
            <div className="w-[68px] h-[68px] rounded-full bg-[rgba(255,194,186,0.44)] flex items-center justify-center mb-5">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D92D20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            
            <h2 className="text-[#142B42] text-[27px] font-bold mb-3">Tolak Jurnal ini?</h2>
            
            <p className="text-[#5D6A77] text-[16px] leading-relaxed mb-6">
              Jurnal <span className="font-bold text-[#142B42]">Sosialisasi Pengawasan Pemilu Partisipatif dengan Toko Masyarakat</span> akan dikembalikan ke staf pengaju untuk direvisi. Sertakan alasan agar staf tahu apa yang perlu diperbaiki.
            </p>

            {/* Form Area */}
            <div className="mb-8">
              <label className="block text-[#142B42] text-[24px] font-semibold mb-3">Alasan Pengembalian</label>
              <textarea 
                className="w-full h-[184px] border border-[#A0A0A0] rounded-[8px] p-4 text-[20px] font-medium text-[#142B42] outline-none focus:border-[#0F3963] resize-none placeholder:font-medium"
                placeholder="Jelaskan bagian yang perlu diperbaiki...."
              ></textarea>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsRejectModalOpen(false)}
                className="w-[126px] h-[56px] rounded-[13px] border border-[rgba(0,0,0,0.43)] text-[#142B42] text-[16px] font-bold bg-white hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Batal
              </button>
              <button 
                className="w-[199px] h-[56px] rounded-[13px] bg-[#EFD3D0] text-[#AB0000] text-[20px] font-semibold hover:bg-[#e3c2bf] transition-colors flex items-center justify-center"
              >
                Kirim Penolakan
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Approve Modal */}
      {isApproveModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[10px] p-8 w-[734px] shadow-2xl flex flex-col">
            
            {/* Header Icon */}
            <div className="w-[68px] h-[68px] rounded-full bg-[#E1F3EA] flex items-center justify-center mb-5">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F9347" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            
            <h2 className="text-[#142B42] text-[27px] font-bold mb-3">Setujui Jurnal ini?</h2>
            
            <p className="text-[#5D6A77] text-[16px] leading-relaxed mb-6">
              Anda akan menyetujui Audiensi dengan Panwascam Terkait Netralitas ASN. Setelah disetujui, jurnal ini terkunci dan tidak dapat diubah lagi oleh siapa pun.
            </p>

            {/* Info Area (Instead of Form) */}
            <div className="mb-8 w-full h-[152px] bg-[#EEF1F6] border border-[#ABABAB] rounded-[10px] flex flex-col justify-center px-8 gap-6">
              <div className="flex justify-between items-center">
                <span className="text-[#5D6A77] text-[16px]">Diajukan oleh</span>
                <span className="text-[#5D6A77] text-[16px] font-medium">Staff HUMAS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5D6A77] text-[16px]">Tanggal Kegiatan</span>
                <span className="text-[#5D6A77] text-[16px] font-medium">20 September 2026</span>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsApproveModalOpen(false)}
                className="w-[126px] h-[56px] rounded-[13px] border border-[rgba(0,0,0,0.43)] text-[#142B42] text-[16px] font-bold bg-white hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Batal
              </button>
              <button 
                onClick={() => {
                  setIsApproved(true);
                  setIsApproveModalOpen(false);
                }}
                className="w-[199px] h-[56px] rounded-[13px] bg-[#E1F3EA] text-[#0F9347] text-[20px] font-semibold hover:bg-[#d1ebd9] transition-colors flex items-center justify-center"
              >
                Setujui Jurnal
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
