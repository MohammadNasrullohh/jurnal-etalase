import React from 'react';

export default function JurnalSaya() {
  return (
    <div className="flex-1 p-6 md:p-10 flex flex-col h-full overflow-y-auto">
      
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-[18px]">
        
        {/* Semua Jurnal */}
        <div className="w-full h-[182px] bg-white rounded-[20px] border border-[#E2E8F0] p-6 flex flex-col justify-between relative cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-colors hover:bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-md border border-[#E2E8F0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <span className="text-[#142B42] text-[13px] font-bold">Semua Jurnal</span>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-[#142B42] text-[42px] font-bold leading-none mb-2">10</span>
            <span className="text-[#7B8EA0] text-[11px] font-medium">Total Jurnal yang diajukan</span>
          </div>
          <div className="absolute bottom-6 right-6 text-[#142B42]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

        {/* Menunggu Proses */}
        <div className="w-full h-[182px] bg-white rounded-[20px] border border-[#F7921C]/30 p-6 flex flex-col justify-between relative cursor-pointer shadow-[0_8px_24px_rgba(247,146,28,0.15)] transition-colors hover:bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-md border border-[#E2E8F0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </div>
            <span className="text-[#142B42] text-[13px] font-bold">Menunggu Proses</span>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-[#142B42] text-[42px] font-bold leading-none mb-2">1</span>
            <span className="text-[#7B8EA0] text-[11px] font-medium">Dalam Tahap Verifikasi</span>
          </div>
          <div className="absolute bottom-6 right-6 text-[#F7921C]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

        {/* Terbit */}
        <div className="w-full h-[182px] bg-white rounded-[20px] border border-[#E2E8F0] p-6 flex flex-col justify-between relative cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-colors hover:bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-md border border-[#E2E8F0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
            </div>
            <span className="text-[#142B42] text-[13px] font-bold">Terbit</span>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-[#142B42] text-[42px] font-bold leading-none mb-2">3</span>
            <span className="text-[#7B8EA0] text-[11px] font-medium">Telah Di Publikasikan</span>
          </div>
          <div className="absolute bottom-6 right-6 text-[#87BFFF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

      </div>

      {/* Placeholder for Charts */}
      <div className="flex gap-[18px] mt-4 w-full">
        {/* Bar Chart */}
        <div className="w-[42%] h-[277px] bg-white rounded-[22px] border-[0.28px] border-black p-6 shadow-sm flex flex-col shrink-0">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[#142B42] text-[12px] font-bold">Jumlah Jurnal Per Bulan</span>
            <div className="w-[75px] h-[24px] bg-[#F1F6FC] rounded-[17px] flex items-center justify-center gap-1 cursor-pointer text-[#142B42] text-[11px] font-medium">
              2026
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
            <div className="flex-1 flex mt-2 relative pl-6 pb-6">
              {/* Y-axis labels and ticks */}
              <div className="absolute left-0 top-0 bottom-6 w-5 flex flex-col justify-between items-end text-[9px] text-[#7B8EA0] font-medium z-10">
                <div className="flex items-center gap-1 w-full justify-end translate-y-[-50%]"><span className="leading-none text-right">10<br/>0</span><div className="w-1 h-[1px] bg-[#D1D5DB]"></div></div>
                <div className="flex items-center gap-1 w-full justify-end translate-y-[-50%]"><span>75</span><div className="w-1 h-[1px] bg-[#D1D5DB]"></div></div>
                <div className="flex items-center gap-1 w-full justify-end translate-y-[-50%]"><span>50</span><div className="w-1 h-[1px] bg-[#D1D5DB]"></div></div>
                <div className="flex items-center gap-1 w-full justify-end translate-y-[-50%]"><span>25</span><div className="w-1 h-[1px] bg-[#D1D5DB]"></div></div>
                <div className="flex items-center gap-1 w-full justify-end translate-y-[50%]"><span>0</span><div className="w-1 h-[1px] bg-[#D1D5DB]"></div></div>
              </div>
              
              {/* Main Grid Area */}
              <div className="flex-1 relative border-l border-b border-[#D1D5DB] flex">
                {/* Horizontal Gridlines */}
                <div className="absolute top-0 left-0 right-0 border-t border-[#F3F4F6] z-0"></div>
                <div className="absolute top-[25%] left-0 right-0 border-t border-[#F3F4F6] z-0"></div>
                <div className="absolute top-[50%] left-0 right-0 border-t border-[#F3F4F6] z-0"></div>
                <div className="absolute top-[75%] left-0 right-0 border-t border-[#F3F4F6] z-0"></div>

                {/* Vertical Gridlines & Bars & X-axis labels */}
                {[25, 88, 35, 82, 20, 55, 48, 50, 30, 30, 30, 96].map((val, i) => (
                  <div key={i} className="flex-1 relative flex flex-col items-center justify-end h-full border-r border-[#F3F4F6]">
                    {/* Bar */}
                    <div className="w-[75%] bg-[#FFAE42] z-10" style={{ height: `${val}%` }}></div>
                    
                    {/* X-axis tick */}
                    <div className="absolute bottom-[-4px] w-[1px] h-1 bg-[#D1D5DB]"></div>
                    
                    {/* X-axis label */}
                    <span className="absolute bottom-[-20px] text-[9px] text-[#7B8EA0] font-medium">{i}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
        
        {/* Pie Charts */}
        <div className="flex-1 h-[273px] bg-white rounded-[22px] border-[0.28px] border-black p-6 shadow-sm flex flex-col">
          <span className="text-[#142B42] text-[12px] font-bold mb-4">Status Jurnal</span>
          <div className="flex-1 flex items-center justify-center">
             <div className="w-[140px] h-[140px] rounded-full bg-[#4ADE80] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[70px] h-[70px] bg-[#F87171] transform origin-bottom-left rotate-45"></div>
                <div className="absolute bottom-0 right-0 w-[70px] h-[70px] bg-[#FACC15]"></div>
             </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
             <span className="flex items-center gap-1 text-[9px] text-[#7B8EA0]"><div className="w-2 h-2 rounded-full bg-[#4ADE80]"></div> Diterima</span>
             <span className="flex items-center gap-1 text-[9px] text-[#7B8EA0]"><div className="w-2 h-2 rounded-full bg-[#FACC15]"></div> Menunggu</span>
             <span className="flex items-center gap-1 text-[9px] text-[#7B8EA0]"><div className="w-2 h-2 rounded-full bg-[#F87171]"></div> Ditolak</span>
          </div>
        </div>

        <div className="flex-1 h-[273px] bg-white rounded-[22px] border-[0.28px] border-black p-6 shadow-sm flex flex-col">
          <span className="text-[#142B42] text-[12px] font-bold mb-4">Kategori Jurnal</span>
          <div className="flex-1 flex items-center justify-center">
             <div className="w-[140px] h-[140px] rounded-full bg-[#60A5FA] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[70px] h-[70px] bg-[#C084FC]"></div>
                <div className="absolute bottom-0 right-0 w-[70px] h-[70px] bg-[#F472B6]"></div>
             </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
             <span className="flex items-center gap-1 text-[9px] text-[#7B8EA0]"><div className="w-2 h-2 rounded-full bg-[#60A5FA]"></div> Sosialisasi</span>
             <span className="flex items-center gap-1 text-[9px] text-[#7B8EA0]"><div className="w-2 h-2 rounded-full bg-[#C084FC]"></div> Rapat</span>
          </div>
        </div>
      </div>

      {/* Jurnal Bawahan Row */}
      <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-6 shadow-sm mt-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <h3 className="text-[#142B42] text-[14px] font-bold">Jurnal Bawahan</h3>
            </div>
            <p className="text-[#7B8EA0] text-[11px] font-medium ml-6">Draft yang menunggu review dan jurnal terbit staf</p>
          </div>
          <div className="flex bg-white/10 backdrop-blur-[4.81px] shadow-[inset_-3.21px_3.21px_3.21px_rgba(255,255,255,0.4),inset_3.21px_-3.21px_3.21px_rgba(214,214,214,0.4)] rounded-full p-1">
            <button className="px-6 py-1.5 bg-[#142B42] text-white text-[11px] font-medium rounded-full shadow-sm">Semua</button>
            <button className="px-6 py-1.5 text-[#7B8EA0] text-[11px] font-medium rounded-full hover:bg-gray-100 transition-colors">Draft</button>
            <button className="px-6 py-1.5 text-[#7B8EA0] text-[11px] font-medium rounded-full hover:bg-gray-100 transition-colors">Terbit</button>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { status: 'Menunggu approval', label: 'Menunggu approval' },
            { status: 'Terbit Publik', label: 'Terbit Publik' },
            { status: 'Menunggu approval', label: 'Menunggu approval' },
            { status: 'Menunggu approval', label: 'Menunggu approval' },
            { status: 'Terbit Publik', label: 'Terbit Publik' },
            { status: 'Menunggu approval', label: 'Menunggu approval' },
            { status: 'Terbit Publik', label: 'Terbit Publik' },
            { status: 'Terbit Publik', label: 'Terbit Publik' },
            { status: 'Terbit Publik', label: 'Terbit Publik' },
            { status: 'Menunggu approval', label: 'Menunggu approval' },
            { status: 'Menunggu approval', label: 'Menunggu approval' },
            { status: 'Menunggu approval', label: 'Menunggu approval' },
          ].map((item, idx) => (
              <div key={idx} className="h-[172px] bg-[#FFFEFE] rounded-[12px] border-[0.28px] border-[#142B42] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                {/* Card Header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="w-[79px] h-[20px] flex justify-center items-center gap-1 bg-[#E7F2FE] text-[#0284C7] text-[8px] font-bold rounded-[10px] whitespace-nowrap leading-none">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Sosialisasi
                  </span>
                  {item.status === 'Menunggu approval' ? (
                    <span className="w-[109px] h-[20px] flex justify-center items-center gap-1 bg-[#FFE5C8] text-[#F97316] text-[8px] font-bold rounded-[10px] whitespace-nowrap leading-none">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Menunggu Approval
                    </span>
                  ) : (
                    <span className="w-[78px] h-[20px] flex justify-center items-center gap-1 bg-[#C0FFDF] text-[#16A34A] text-[8px] font-bold rounded-[10px] whitespace-nowrap leading-none">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Terbit Publik
                    </span>
                  )}
                </div>
  
                {/* Card Title & Info */}
                <div className="flex flex-col mb-5">
                  <h4 className="text-[#283D52] text-[12px] font-medium mb-3">Bawaslu Kebumen</h4>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-[#142B42] text-[8px]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      16 September 2026
                    </div>
                    <div className="flex items-center gap-2 text-[#142B42] text-[8px]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      Staf Divisi Pengawasan
                    </div>
                  </div>
                </div>
  
                {/* Card Action */}
                {item.status === 'Menunggu approval' ? (
                  <button className="w-full h-[26px] bg-[#1F365C] text-[#FFFEFE] text-[12px] font-medium rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#152441] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Review
                  </button>
                ) : (
                  <button className="w-full h-[26px] bg-[#FFFEFE] border-[0.5px] border-[#142B42] text-[#142B42] text-[12px] font-medium rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Lihat
                  </button>
                )}
              </div>
          ))}
        </div>
      </div>

    </div>
  );
}
