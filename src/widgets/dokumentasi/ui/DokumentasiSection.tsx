import React from 'react'

export const DokumentasiSection = () => {
  return (
    <section className="relative w-full pt-10 pb-20 overflow-hidden" style={{ fontFamily: 'Poppins' }}>
      
      {/* Decorative background curve */}
      <div className="absolute right-0 bottom-0 w-[40%] h-[60%] opacity-20 pointer-events-none" style={{ backgroundImage: 'url("/assets/floating-cards-distorted.png")', backgroundSize: 'cover', backgroundPosition: 'right bottom' }}></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-[#142B42] text-[32px] md:text-[40px] font-bold leading-tight mb-2">
              Dokumentasi Kegiatan
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          
          {/* Left Arrow */}
          <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-[45px] h-[45px] rounded-full bg-[#F7921C] hover:bg-[#e08316] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 hidden md:flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="relative flex flex-col items-center justify-center bg-[#F8FAFD] rounded-[32px] p-3 hover:shadow-xl transition-all duration-300 group cursor-pointer w-full h-[400px] md:h-[486px]">
              <div className="w-full h-full rounded-[30px] overflow-hidden relative">
                <img src="/assets/banner-image.jpg" alt="Dokumentasi 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="relative flex flex-col items-center justify-center bg-[#F8FAFD] rounded-[32px] p-3 hover:shadow-xl transition-all duration-300 group cursor-pointer w-full h-[400px] md:h-[486px]">
              <div className="w-full h-full rounded-[30px] overflow-hidden relative">
                <img src="/assets/banner-image.jpg" alt="Dokumentasi 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col items-center justify-center bg-[#F8FAFD] rounded-[32px] p-3 hover:shadow-xl transition-all duration-300 group cursor-pointer w-full h-[400px] md:h-[486px]">
              <div className="w-full h-full rounded-[30px] overflow-hidden relative">
                <img src="/assets/banner-image.jpg" alt="Dokumentasi 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

          </div>

          {/* Right Arrow */}
          <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-[45px] h-[45px] rounded-full bg-[#F7921C] hover:bg-[#e08316] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 hidden md:flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
