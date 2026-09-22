import sys

with open('src/views/landing/index.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if 'SECTION 1' in line and 'HERO' in line:
        start_idx = i
    if 'SECTION 2' in line and 'STATS' in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_hero = """
        {/* Sticky Header */}
        <div className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ease-out ${scrollY > 150 ? 'translate-y-4 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
            <div className="w-full h-[89px] bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-between px-[36px] py-[11px]" style={{ fontFamily: 'Poppins' }}>
              <div className="flex items-center">
                <img src="/assets/hero-logo-etalase.png" alt="ETALASE" className="h-[45px] object-contain" />
              </div>
              <div className="hidden lg:flex items-center gap-[60px]">
                <a href="#" className="text-[#142B42] font-semibold text-[15px] relative">
                  Beranda
                  <div className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#142B42]"></div>
                </a>
                <a href="#" className="text-[#5D6A77] font-medium text-[15px] hover:text-[#F7921C] transition-colors">E-kalender</a>
                <a href="#" className="text-[#5D6A77] font-medium text-[15px] hover:text-[#F7921C] transition-colors">Jurnal</a>
                <a href="#" className="text-[#5D6A77] font-medium text-[15px] hover:text-[#F7921C] transition-colors">Dokumentasi</a>
              </div>
              <button 
                className="bg-[#F7921C] hover:bg-[#e08316] transition-colors text-white font-semibold text-[15px] w-[154px] h-[67px] rounded-[34px] flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => setIsLoginOpen(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Login
              </button>
            </div>
          </div>
        </div>

        {/* NEW WHITE HERO SECTION */}
        <section className="relative w-full overflow-hidden pt-[100px] pb-[60px]" style={{ background: 'linear-gradient(135deg, #FFFFFF 30%, #DAE6F7 70%, #C8D8F0 100%)' }}>
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
              <h1 className="text-[#142B42] text-[40px] md:text-[56px] font-bold leading-tight mb-4" style={{ fontFamily: 'Poppins' }}>
                ETALASE
              </h1>
              <p className="text-[#5D6A77] text-[18px] md:text-[24px] mb-8" style={{ fontFamily: 'Poppins' }}>
                Arsip Jurnal Bawaslu Kebumen
              </p>
            </div>
            <div className="relative h-auto md:h-[500px] flex items-center justify-center lg:justify-end mt-16 md:mt-0">
              <div className="relative w-full max-w-[500px]" style={{ zIndex: 10 }}>
                <img src="/assets/floating-cards-distorted.png" alt="Floating Cards Background" className="absolute top-0 right-0 w-full h-[120%] object-contain scale-[1.2] -translate-y-12 translate-x-12 opacity-90 pointer-events-none" />
                <div className="absolute -top-[52px] right-[25px] md:right-[35px] z-20 pointer-events-none">
                  <img src="/assets/bawaslu_hero_logo.png" alt="Bawaslu Logo" className="w-[180px] md:w-[230px] object-contain" />
                </div>
                <img 
                  src="/assets/kalender_asli_hd.png" 
                  alt="Calendar Graphic" 
                  className="relative z-10 w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-pointer transition-transform hover:scale-105" 
                  onClick={() => setIsModalOpen(true)} 
                />
              </div>
            </div>
          </div>
        </section>
"""
    lines = lines[:start_idx] + [new_hero + '\n'] + lines[end_idx:]
    with open('src/views/landing/index.tsx', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Old Hero section successfully replaced!")
else:
    print(f"Failed to find indices. Start: {start_idx}, End: {end_idx}")
