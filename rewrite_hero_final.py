import re

with open('src/views/landing/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_hero = """      {/* 2. Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#F1F6FC] pt-[120px]" style={{ minHeight: '760px' }}>
        <div className="container mx-auto px-6 lg:px-20 h-full flex flex-col lg:flex-row items-center justify-between max-w-[1440px] relative z-10" style={{ paddingTop: '80px' }}>
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] flex flex-col relative z-20">
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', color: '#142B42', marginBottom: '16px' }}>Selamat Datang di</h2>
            
            {/* Logo Group */}
            <div className="flex items-center gap-6 mb-8">
              <img src="/assets/hero-logo-left.png" alt="Logo" className="w-[120px] h-[120px] object-contain" />
              <div className="flex flex-col justify-center">
                <img src="/assets/hero-logo-etalase.png" alt="ETALASE" className="w-[280px] object-contain mb-1" />
                <h1 style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', color: '#142B42' }}>Arsip Langkah Bawaslu Kebumen</h1>
              </div>
            </div>
            
            <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '15px', color: '#5D6A77', lineHeight: '1.6', maxWidth: '480px', marginBottom: '40px' }}>
              Temukan, jelajahi, dan akses informasi arsip, artikel, serta jurnal Bawaslu Kebumen dengan mudah dan terstruktur dalam satu platform
            </p>
            
            <button className="bg-transparent border border-[#F7921C] text-[#F7921C] rounded-full px-8 py-3 w-max hover:bg-[#F7921C] hover:text-white transition-colors" style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '15px' }}>
              Jelajahi Kami
            </button>
          </div>

          {/* Right Content - Mockup Cards */}
          <div className="w-full lg:w-[55%] flex justify-end relative mt-16 lg:mt-0 z-20 hidden md:flex h-[600px] items-center pr-10">
            <div className="relative w-[520px] h-[520px]">
              
              {/* Card 1 (Top Blue) */}
              <div className="absolute left-[-40px] top-[10px] w-[260px] bg-white rounded-[16px] p-4 shadow-[0_12px_40px_rgba(20,43,66,0.08)] z-10" style={{ transform: 'rotate(-8deg)' }}>
                <div className="inline-block bg-[#EEF2FF] text-[#4F83F5] px-3 py-1 rounded-md mb-2" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '10px' }}>8 Sept 2026</div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '13px', color: '#142B42', marginBottom: '4px' }}>Rapat Evaluasi Pengawasan</h3>
                <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '11px', color: '#7B7A7A' }}>Ruang Aula Bawaslu Kab. Kebumen</p>
              </div>

              {/* Card 2 (Middle Orange) */}
              <div className="absolute left-[-80px] top-[160px] w-[260px] bg-white rounded-[16px] p-4 shadow-[0_12px_40px_rgba(20,43,66,0.08)] z-10" style={{ transform: 'rotate(6deg)' }}>
                <div className="inline-block bg-[#FFF4E5] text-[#F7921C] px-3 py-1 rounded-md mb-2" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '10px' }}>15 Sept 2026</div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '13px', color: '#142B42', marginBottom: '4px' }}>Koordinasi Parpol</h3>
                <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '11px', color: '#7B7A7A' }}>Kantor KPU Daerah</p>
              </div>

              {/* Card 3 (Bottom Green) */}
              <div className="absolute left-[-20px] top-[320px] w-[260px] bg-white rounded-[16px] p-4 shadow-[0_12px_40px_rgba(20,43,66,0.08)] z-10" style={{ transform: 'rotate(-4deg)' }}>
                <div className="inline-block bg-[#E6F8F3] text-[#10B981] px-3 py-1 rounded-md mb-2" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '10px' }}>20 Sept 2026</div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '13px', color: '#142B42', marginBottom: '4px' }}>Sosialisasi Pemilu</h3>
                <p style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '11px', color: '#7B7A7A' }}>Hotel Kebumen Raya</p>
              </div>

              {/* Card 4 (Main macOS Window) */}
              <div className="absolute right-0 top-[20px] w-[484px] h-[518px] bg-white rounded-[20px] shadow-[0_24px_80px_rgba(20,43,66,0.15)] overflow-hidden border border-[#DED2D2] flex flex-col z-20">
                {/* macOS Header */}
                <div className="w-full h-[64px] bg-[#142B42] flex items-center px-5 justify-between flex-shrink-0">
                  <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                      <span className="text-white font-semibold tracking-wide text-[13px]" style={{ fontFamily: 'Poppins' }}>SEPTEMBER</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-full p-1 h-[28px]">
                    <span className="px-3 py-0.5 rounded-full text-[#142B42] text-[9px] font-bold cursor-pointer" style={{ fontFamily: 'Poppins' }}>Hari</span>
                    <span className="px-3 py-0.5 rounded-full text-[#142B42] text-[9px] font-bold cursor-pointer" style={{ fontFamily: 'Poppins' }}>Minggu</span>
                    <span className="px-3 py-0.5 rounded-full bg-[#142B42] text-white text-[9px] font-bold cursor-pointer shadow-sm" style={{ fontFamily: 'Poppins' }}>Bulan</span>
                  </div>
                </div>
                {/* Calendar Body */}
                <div className="flex-1 flex flex-col bg-white">
                  <div className="grid grid-cols-7 text-center pt-4 pb-2 border-b border-[#F0F2F5]">
                    {['Ming','Sen','Sel','Rab','Kam','Jum','Sab'].map((d,i) => (
                      <div key={i} className="text-[#142B42] font-semibold text-[11px]" style={{ fontFamily: 'Poppins' }}>{d}</div>
                    ))}
                  </div>
                  <div className="flex-1 grid grid-cols-7 grid-rows-5">
                    {[
                      null, null, null, 1, 2, 3, 4,
                      5, 6, 7, 8, 9, 10, 11,
                      12, 13, 14, 15, 16, 17, 18,
                      19, 20, 21, 22, 23, 24, 25,
                      26, 27, 28, 29, 30, null, null
                    ].map((d, i) => {
                      const hasEvent = [1, 2, 4, 7, 13, 14].includes(d);
                      const isToday = d === 16;
                      const isLastCol = (i + 1) % 7 === 0;
                      const isLastRow = i >= 28;
                      return (
                        <div key={i} className={`flex flex-col items-center pt-3 border-[#F0F2F5] ${!isLastCol ? 'border-r' : ''} ${!isLastRow ? 'border-b' : ''}`}>
                          {d && (
                            <>
                              <div className={`w-8 h-8 flex items-center justify-center rounded-full text-[14px] ${isToday ? 'bg-[#4F83F5] text-white font-bold' : 'text-[#142B42] font-medium'}`} style={{ fontFamily: 'Poppins' }}>
                                {d}
                              </div>
                              {hasEvent && (
                                <div className="flex gap-1 mt-1">
                                  <div className="w-2.5 h-1.5 rounded-full bg-[#F7921C]"></div>
                                  <div className="w-2.5 h-1.5 rounded-full bg-[#F7921C]"></div>
                                </div>
                              )}
                              {isToday && (
                                <span className="text-[7px] text-[#4F83F5] font-bold mt-0.5" style={{ fontFamily: 'Poppins' }}>Hari ini</span>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>"""

start_idx = content.find("{/* 2. Hero Section */}")
end_idx = content.find("{/* 3. Rekapitulasi Kegiatan */}")

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_hero + "\n\n      " + content[end_idx:]
    with open('src/views/landing/index.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success")
else:
    print("Could not find boundaries")
