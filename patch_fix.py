import sys

with open('src/views/landing/index.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Add states
for i, line in enumerate(lines):
    if 'const [selectedJurnalId' in line:
        lines.insert(i+1, '  const [isLoginOpen, setIsLoginOpen] = React.useState(false)\n')
        break

# 2. Replace Hero Section
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if 'SECTION 1 - HERO' in line:
        start_idx = i
    if 'SECTION 2 - STATS' in line:
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

        {/* SECTION 1 - HERO */}
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
                  onClick={() => {
                    document.getElementById('section-arsip')?.scrollIntoView({ behavior: 'smooth' })
                  }} 
                />
              </div>
            </div>
          </div>
        </section>
"""
    lines = lines[:start_idx] + [new_hero + '\n'] + lines[end_idx:]

# 3. Add Modals at bottom
modals = """
      {/* Login Modal Overlay */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 overflow-y-auto" onClick={() => setIsLoginOpen(false)}>
          <div 
            className="relative w-full max-w-[1306px] min-h-[840px] bg-white rounded-[64px] flex overflow-hidden shadow-2xl mx-auto flex-col md:flex-row" 
            onClick={(e) => e.stopPropagation()} 
            style={{ fontFamily: 'Poppins' }}
          >
            <button 
              className="absolute top-8 right-8 text-gray-400 hover:text-gray-700 transition z-10"
              onClick={() => setIsLoginOpen(false)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
              <img src="/assets/login-illustration.png" alt="Login Illustration" className="w-full max-w-[500px] object-contain" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-10 lg:px-24 py-12 relative bg-white">
              <div className="flex justify-center mb-10">
                <img src="/assets/login-logo.png" alt="ETALASE" className="h-[120px] object-contain" />
              </div>
              <h2 className="text-[40px] font-medium text-[#142B42] mb-2 text-center">
                Log in to your account
              </h2>
              <p className="text-[18px] text-[#7B8EA0] font-medium mb-12 text-center">
                welcome back! Please enter your detail
              </p>
              <div className="max-w-[520px] w-full mx-auto">
                <div className="mb-8">
                  <label className="block text-[16px] text-[#142B42] font-medium mb-3 ml-2">Username</label>
                  <input 
                    type="text" 
                    placeholder="@ecapirank" 
                    className="w-full h-[60px] bg-[#F2F5FF] rounded-[16px] px-6 text-[16px] text-[#142B42] font-medium outline-none border-2 border-transparent focus:border-[#4F83F5] transition-colors placeholder:text-[#142B42]" 
                  />
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3 px-2">
                    <label className="text-[16px] text-[#142B42] font-medium">PIN</label>
                    <button className="text-[#7B8EA0] hover:text-[#142B42] transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                  </div>
                  <div className="flex justify-between gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <input 
                        key={i} 
                        type="password" 
                        maxLength={1} 
                        className="w-[118px] h-[114px] bg-[#F2F5FF] rounded-[10px] text-center text-[40px] font-bold text-[#142B42] outline-none border-2 border-transparent focus:border-[#4F83F5] transition-colors" 
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right mt-4">
                  <a href="#" className="text-[#F14646] font-medium text-[16px] hover:underline pr-2">lupa PIN</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
"""
for i in range(len(lines)-1, -1, -1):
    if '</QueryClientProvider>' in lines[i]:
        lines.insert(i, modals + '\n')
        break

with open('src/views/landing/index.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Patch applied successfully!")
