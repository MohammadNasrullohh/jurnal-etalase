"use client"
import React, { useState } from 'react'
import JurnalSaya from './JurnalSaya'
import Approval from './Approval'

export default function PanelPage() {
  const [activeMenu, setActiveMenu] = useState('tambah')

  return (
    <div className="min-h-screen flex bg-[#F4F7FB]" style={{ fontFamily: 'Poppins' }}>
      
      {/* SIDEBAR */}
      <aside className="w-[417px] bg-[#F1F6FC] border-r border-[#87BFFF]/80 flex flex-col justify-between shrink-0">
        
        <div>
          {/* Logo */}
          <div className="h-[143px] bg-[#F1F6FC] border-b border-[#78B5FF] flex items-center px-10 gap-4">
            <div className="w-[65px] h-[60px] bg-[#F7921C] rounded-[9px] flex flex-col items-center justify-center p-2 shadow-sm shrink-0">
              {/* Stacked layers icon */}
              <div className="w-full h-[6px] bg-white rounded-[2px] opacity-60 mb-[2px]"></div>
              <div className="w-full h-[6px] bg-white rounded-[2px] opacity-80 mb-[2px]"></div>
              <div className="w-full h-[6px] bg-white rounded-[2px]"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#00306E] text-[24px] font-semibold leading-tight tracking-tight">PANEL ARSIP</span>
              <span className="text-[#5D6A77] text-[12px]">Bawaslu Kebumen</span>
            </div>
          </div>

          {/* Menus */}
          <div className="p-6 px-10 flex flex-col gap-4 items-start mt-2">
            
            {/* Tambah Jurnal */}
            <button 
              onClick={() => setActiveMenu('tambah')}
              className={`w-[289px] h-[75px] flex items-center gap-4 px-5 rounded-[11px] transition-all text-left ${activeMenu === 'tambah' ? 'bg-[#FEB143]/25' : 'hover:bg-white'}`}
            >
              <div className={`w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0 ${activeMenu === 'tambah' ? 'bg-[#F7921C] text-white shadow-md' : 'bg-white text-[#F7921C] shadow-sm border border-[#E2E8F0]'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#142B42]">Tambah Jurnal</span>
                <span className="text-[11px] text-[#7B8EA0]">Buat Arsip Baru</span>
              </div>
            </button>

            {/* Jurnal Saya */}
            <button 
              onClick={() => setActiveMenu('jurnal')}
              className={`w-[289px] h-[75px] flex items-center gap-4 px-5 rounded-[11px] transition-all text-left ${activeMenu === 'jurnal' ? 'bg-[#FEB143]/25' : 'hover:bg-white'}`}
            >
              <div className={`w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0 ${activeMenu === 'jurnal' ? 'bg-[#F7921C] text-white shadow-md' : 'bg-white text-[#F7921C] shadow-sm border border-[#E2E8F0]'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#142B42]">Jurnal Saya</span>
                <span className="text-[11px] text-[#7B8EA0]">Lihat riwayat jurnal</span>
              </div>
            </button>

            {/* Approval */}
            <button 
              onClick={() => setActiveMenu('approval')}
              className={`w-[289px] h-[75px] flex items-center gap-4 px-5 rounded-[11px] transition-all text-left ${activeMenu === 'approval' ? 'bg-[#FEB143]/25' : 'hover:bg-white'}`}
            >
              <div className={`w-[42px] h-[42px] rounded-[10px] flex items-center justify-center shrink-0 ${activeMenu === 'approval' ? 'bg-[#F7921C] text-white shadow-md' : 'bg-white text-[#F7921C] shadow-sm border border-[#E2E8F0]'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#142B42]">Approval</span>
                <span className="text-[11px] text-[#7B8EA0]">Tinjau Pengajuan</span>
              </div>
            </button>

          </div>
        </div>

        {/* Profile Area */}
        <div className="p-6 px-10 border-t border-[#E2E8F0] flex flex-col gap-4 items-start">
          <button className="w-[307px] h-[71px] flex items-center justify-center gap-2 bg-[#F1F6FC] border-2 border-[#005EBB] text-[#396094] hover:bg-[#E2EDF8] rounded-[11px] text-[18px] font-semibold transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Kembali ke Beranda
          </button>
          
          <div className="w-[302px] h-[77px] flex items-center justify-between px-5 bg-[#DBEBFF] rounded-[12px] cursor-pointer hover:bg-[#cbe1fa] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] bg-[#F7921C] rounded-full flex items-center justify-center text-white font-bold text-[18px]">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-[#00306E] text-[20px] font-semibold">Kasubag Humas</span>
                <span className="text-[#00306E]/[0.57] text-[15px] font-semibold">KASUBAG</span>
              </div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5D6A77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#F1F6FC]">
        
        {/* Dynamic Header */}
          <header className="h-[143px] bg-[#F1F6FC] border-b border-[#87BFFF]/80 flex items-center px-10 shrink-0">
            <h1 className="text-[#142B42] text-[32px] font-semibold tracking-tight flex items-center gap-3">
              {activeMenu === 'tambah' && (
                <>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="12" y2="17"></line></svg>
                  Formulir Pengajuan Jurnal
                </>
              )}
              {activeMenu === 'jurnal' && (
                <>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  Jurnal Saya
                </>
              )}
              {activeMenu === 'approval' && (
                <>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H20V6C20 4.89543 19.1046 4 18 4H6Z" fill="currentColor"/>
                    <path d="M7 7H17V9H7V7Z" fill="#F1F6FC"/>
                    <path d="M7 11H13V13H7V11Z" fill="#F1F6FC"/>
                    <circle cx="17.5" cy="17.5" r="5" fill="currentColor" stroke="#F1F6FC" strokeWidth="2"/>
                    <path d="M15.5 17.5L17 19L19.5 15.5" stroke="#F1F6FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Persetujuan Jurnal
                </>
              )}
            </h1>
          </header>

        {activeMenu === 'approval' ? (
          <Approval />
        ) : activeMenu === 'jurnal' ? (
          <JurnalSaya />
        ) : (
          <div className="flex-1 p-6 md:p-10">
            {/* Form Container */}
            <div className="w-full max-w-[965px] bg-white rounded-[25px] p-[40px] mx-auto relative">
            
            {/* Card Header */}
            <div className="flex items-start gap-4 mb-10">
              <div className="w-[67px] h-[62px] bg-[#F7921C] rounded-[9px] flex items-center justify-center shrink-0">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="flex flex-col pt-1">
                <h2 className="text-[20px] text-[#142B42] font-bold leading-tight">Pengajuan Jurnal Kegiatan</h2>
                <p className="text-[#5D6A77] text-[13px] mt-1">Lengkapi detail kegiatan di bawah untuk di dokumentasikan ke dalam sistem arsip</p>
              </div>
            </div>

            <form className="flex flex-col gap-6">
              
              {/* Judul Jurnal */}
              <div className="mb-6">
                <label className="block text-[#142B42] text-[13px] font-bold mb-3 uppercase tracking-wide">
                  Judul Jurnal <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Contoh : Rapat Koordinasi Persiapan Pengawasan Pilkada" 
                  className="w-full h-[73px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] px-5 text-[14px] text-[#142B42] placeholder-[#A0AAB5] focus:outline-none focus:border-[#4F83F5] transition-colors" 
                />
              </div>

              {/* Ringkasan Jurnal */}
              <div className="mb-8">
                <label className="block text-[#142B42] text-[13px] font-bold mb-3 uppercase tracking-wide">
                  Ringkasan Jurnal <span className="text-red-500">*</span>
                </label>
                <textarea 
                  className="w-full h-[161px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] p-5 text-[14px] text-[#142B42] focus:outline-none focus:border-[#4F83F5] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Tanggal & Kategori */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative">
                {/* Decorative dots */}
                <div className="absolute left-[200px] -top-[12px]">
                   <svg width="24" height="6" viewBox="0 0 24 6" fill="none"><circle cx="4" cy="3" r="2" fill="#D6B8FA"/><circle cx="12" cy="3" r="2" fill="#D6B8FA"/><circle cx="20" cy="3" r="2" fill="#D6B8FA"/></svg>
                </div>

                <div>
                  <label className="block text-[#142B42] text-[13px] font-bold mb-3 uppercase tracking-wide">
                    Tanggal Kegiatan <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="29/09/2026" 
                      className="w-full h-[73px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] px-5 text-[14px] text-[#142B42] focus:outline-none focus:border-[#4F83F5] transition-colors" 
                    />
                    <svg className="absolute right-5 top-1/2 -translate-y-1/2 text-[#7B8EA0] pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                </div>
                <div>
                  <label className="block text-[#142B42] text-[13px] font-bold mb-3 uppercase tracking-wide">
                    Kategori <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full h-[73px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] px-5 text-[14px] text-[#142B42] appearance-none focus:outline-none focus:border-[#4F83F5] transition-colors cursor-pointer">
                      <option>Sosialisasi</option>
                      <option>Rapat Evaluasi</option>
                      <option>MoU</option>
                    </select>
                    <svg className="absolute right-5 top-1/2 -translate-y-1/2 text-[#7B8EA0] pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>

              {/* Tags & Link */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 relative">
                <div>
                  <label className="block text-[#142B42] text-[13px] font-bold mb-3 uppercase tracking-wide">
                    Tags (Pisah dengan koma) <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Contoh : Pengawasan, Pemilu, Bawaslu" 
                    className="w-full h-[73px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] px-5 text-[14px] text-[#142B42] placeholder-[#A0AAB5] focus:outline-none focus:border-[#4F83F5] transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-[#142B42] text-[13px] font-bold mb-3 uppercase tracking-wide">
                    Link Publikasi
                  </label>
                  <input 
                    type="text" 
                    placeholder="https://kebumen.Bawaslu" 
                    className="w-full h-[73px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] px-5 text-[14px] text-[#142B42] placeholder-[#A0AAB5] focus:outline-none focus:border-[#4F83F5] transition-colors" 
                  />
                </div>
              </div>

              {/* Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-6">
                
                {/* Foto */}
                <div className="h-[240px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] p-[36px] flex flex-col hover:border-[#4F83F5] transition-colors cursor-pointer group relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-[52px] h-[48px] bg-[#FD8C0C]/[0.93] rounded-[9px] flex items-center justify-center text-white shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#142B42] text-[14px] font-bold">Foto Dokumentasi</h3>
                      <p className="text-[#7B8EA0] text-[12px]">Unggah Foto Kegiatan</p>
                    </div>
                  </div>
                  <div className="absolute top-[32px] right-[24px]">
                    <svg width="24" height="6" viewBox="0 0 24 6" fill="none"><circle cx="4" cy="3" r="2" fill="#D6B8FA"/><circle cx="12" cy="3" r="2" fill="#D6B8FA"/><circle cx="20" cy="3" r="2" fill="#D6B8FA"/></svg>
                  </div>
                  
                  {/* Uploaded Photos Preview */}
                  <div className="w-full h-[103px] mt-auto flex justify-between">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=200" alt="Foto 1" className="w-[113px] h-[103px] object-cover rounded-[6px]" />
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200" alt="Foto 2" className="w-[113px] h-[103px] object-cover rounded-[6px]" />
                    <div className="w-[113px] h-[103px] bg-[#EDEDED] rounded-[6px] flex items-center justify-center text-[#7B8EA0] hover:bg-[#E2EDF8] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                  </div>
                </div>

                {/* PDF */}
                <div className="h-[240px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] p-[36px] flex flex-col hover:border-[#4F83F5] transition-colors cursor-pointer group relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-[52px] h-[48px] bg-[#396094]/[0.51] rounded-[9px] flex items-center justify-center text-white shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#142B42] text-[14px] font-bold">Dokumen Pendukung</h3>
                      <p className="text-[#7B8EA0] text-[12px]">PDF Lampiran Kegiatan</p>
                    </div>
                  </div>
                  <div className="absolute top-[32px] right-[24px]">
                    <svg width="24" height="6" viewBox="0 0 24 6" fill="none"><circle cx="4" cy="3" r="2" fill="#D6B8FA"/><circle cx="12" cy="3" r="2" fill="#D6B8FA"/><circle cx="20" cy="3" r="2" fill="#D6B8FA"/></svg>
                  </div>
                  
                  {/* Uploaded PDF Preview */}
                  <div className="w-full h-[103px] mt-auto flex flex-col justify-between">
                    <div className="w-full h-[48px] bg-[#EDEDED] rounded-[5px] flex items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        <span className="text-[#142B42] text-[12px] font-semibold">Laporan_Kegiatan.pdf</span>
                      </div>
                      <div className="text-[#7B8EA0] hover:text-[#D32F2F] transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </div>
                    </div>
                    <div className="w-full h-[48px] bg-[#EDEDED] rounded-[11px] flex items-center justify-center gap-2 text-[#7B8EA0] hover:bg-[#E2EDF8] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                      <span className="text-[12px] font-semibold">Tambah Dokumen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pihak Terkait */}
              <div>
                <label className="block text-[#142B42] text-[13px] font-bold mb-3 uppercase tracking-wide">Pihak Terkait <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  className="w-full h-[73px] bg-[#F6F9FC] border border-[#C7C7C7] rounded-[11px] px-5 text-[14px] text-[#142B42] focus:outline-none focus:border-[#4F83F5] transition-colors" 
                />
              </div>

              {/* Submit Action */}
              <div className="mt-3 pt-10 border-t border-[#BAC4DF] flex justify-end">
                <div className="relative">
                  <div className="absolute right-[16px] -top-[10px]">
                    <svg width="30" height="6" viewBox="0 0 30 6" fill="none"><circle cx="5" cy="3" r="2.5" fill="#D6B8FA"/><circle cx="15" cy="3" r="2.5" fill="#D6B8FA"/><circle cx="25" cy="3" r="2.5" fill="#D6B8FA"/></svg>
                  </div>
                  <button type="button" className="w-[229px] h-[59px] bg-[#396094] hover:bg-[#2A4B75] text-white font-bold text-[14px] rounded-[15px] flex items-center justify-center gap-2 transition-colors">
                    Ajukan Jurnal
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </div>
              </div>

              </form>
            </div>
          </div>
        )}
      </main>

    </div>
  )
}
