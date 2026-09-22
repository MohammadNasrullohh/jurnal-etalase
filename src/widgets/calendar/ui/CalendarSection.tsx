import React from 'react'

export const CalendarSection = ({ onEventClick }: { onEventClick?: () => void }) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-10 mt-8 mb-12">
      <div className="w-full bg-white rounded-[32px] border border-[#E5E7EB] shadow-sm flex flex-col md:flex-row overflow-hidden min-h-[700px]" style={{ fontFamily: 'Poppins' }}>
        
        {/* Left Sidebar - Mini Calendar */}
        <div className="w-full md:w-[320px] bg-white border-r border-[#E5E7EB] p-8 flex flex-col hidden md:flex">
          <div className="flex items-center gap-2 mb-10">
            <h2 className="text-[#142B42] text-[20px] font-semibold">Kalender</h2>
            <div className="flex gap-1 ml-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF4C4C]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFA500]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#00D084]"></div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6 px-2">
            <button className="text-gray-400 hover:text-gray-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <h3 className="text-[#142B42] text-[14px] font-medium">September 2026</h3>
            <button className="text-gray-400 hover:text-gray-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-4 text-center mb-4">
            {['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
              <div key={day} className="text-[#142B42] text-[12px] font-medium">{day}</div>
            ))}
            
            {/* Empty days for offset */}
            <div></div><div></div>

            {/* Mini calendar days */}
            {[...Array(30)].map((_, i) => {
              const day = i + 1;
              const isToday = day === 16;
              const hasEvent = [1, 2, 4, 7, 13, 14].includes(day);
              
              return (
                <div key={day} className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                  <span className={`text-[13px] font-medium w-7 h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-[#346BFF] text-white' : 'text-[#5D6A77] hover:bg-gray-100'}`}>
                    {day}
                  </span>
                  <div className={`w-3 h-[3px] rounded-full ${hasEvent ? 'bg-[#FFB054]' : 'bg-transparent'}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Area - Main Calendar */}
        <div className="flex-1 bg-white flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-700 p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <h2 className="text-[#142B42] text-[24px] font-semibold">September 2026</h2>
              <button className="text-gray-400 hover:text-gray-700 p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center bg-[#F3F4F6] rounded-full p-1">
              <button className="px-6 py-2 rounded-full text-[13px] font-medium text-[#5D6A77] hover:bg-white hover:shadow-sm transition-all">Hari</button>
              <button className="px-6 py-2 rounded-full text-[13px] font-medium text-[#5D6A77] hover:bg-white hover:shadow-sm transition-all">Minggu</button>
              <button className="px-6 py-2 rounded-full text-[13px] font-medium bg-[#142B42] text-white shadow-md transition-all">Bulan</button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="flex-1 flex flex-col">
            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-[#E5E7EB]">
              {['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
                <div key={day} className="py-4 px-4 text-[#142B42] text-[15px] font-semibold">
                  {day}
                </div>
              ))}
            </div>

            {/* Grid Body */}
            <div className="flex-1 grid grid-cols-7 grid-rows-5">
              
              {/* Row 1 */}
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#A0ABBB] text-[14px] font-medium">30</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#A0ABBB] text-[14px] font-medium">31</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 relative">
                <span className="text-[#142B42] text-[14px] font-medium inline-block mb-2">1</span>
                <div onClick={onEventClick} className="w-full bg-[#FFDFB8] hover:bg-[#ffc98a] cursor-pointer text-[#F7921C] text-[11px] font-semibold px-2 py-1 rounded-[4px] truncate transition-colors">
                  Rapat Evaluasi
                </div>
              </div>
              <div className="border-r border-b border-[#E5E7EB] p-3 relative">
                <span className="text-[#142B42] text-[14px] font-medium inline-block mb-2">2</span>
                <div onClick={onEventClick} className="w-full bg-[#FFDFB8] hover:bg-[#ffc98a] cursor-pointer text-[#F7921C] text-[11px] font-semibold px-2 py-1 rounded-[4px] truncate transition-colors">
                  Rapat Evaluasi
                </div>
              </div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">3</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 relative">
                <span className="text-[#142B42] text-[14px] font-medium inline-block mb-2">4</span>
                <div onClick={onEventClick} className="w-full bg-[#FFDFB8] hover:bg-[#ffc98a] cursor-pointer text-[#F7921C] text-[11px] font-semibold px-2 py-1 rounded-[4px] truncate transition-colors">
                  Rapat Evaluasi
                </div>
              </div>
              <div className="border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">5</div>

              {/* Row 2 */}
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">6</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 relative">
                <span className="text-[#142B42] text-[14px] font-medium inline-block mb-2">7</span>
                <div onClick={onEventClick} className="w-full bg-[#FFDFB8] hover:bg-[#ffc98a] cursor-pointer text-[#F7921C] text-[11px] font-semibold px-2 py-1 rounded-[4px] truncate transition-colors">
                  Rapat Evaluasi
                </div>
              </div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">8</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">9</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">10</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">11</div>
              <div className="border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">12</div>

              {/* Row 3 */}
              <div className="border-r border-b border-[#E5E7EB] p-3 relative">
                <span className="text-[#142B42] text-[14px] font-medium inline-block mb-2">13</span>
                <div onClick={onEventClick} className="w-full bg-[#FFDFB8] hover:bg-[#ffc98a] cursor-pointer text-[#F7921C] text-[11px] font-semibold px-2 py-1 rounded-[4px] truncate transition-colors">
                  Rapat Evaluasi
                </div>
              </div>
              <div className="border-r border-b border-[#E5E7EB] p-3 relative">
                <span className="text-[#142B42] text-[14px] font-medium inline-block mb-2">14</span>
                <div onClick={onEventClick} className="w-full bg-[#FFDFB8] hover:bg-[#ffc98a] cursor-pointer text-[#F7921C] text-[11px] font-semibold px-2 py-1 rounded-[4px] truncate transition-colors">
                  Rapat Evaluasi
                </div>
              </div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">15</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 relative">
                <span className="bg-[#346BFF] text-white w-7 h-7 flex items-center justify-center rounded-full text-[14px] font-semibold mb-2">16</span>
              </div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">17</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">18</div>
              <div className="border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">19</div>

              {/* Row 4 */}
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">20</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">21</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">22</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">23</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">24</div>
              <div className="border-r border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">25</div>
              <div className="border-b border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">26</div>

              {/* Row 5 */}
              <div className="border-r border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">27</div>
              <div className="border-r border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">28</div>
              <div className="border-r border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">29</div>
              <div className="border-r border-[#E5E7EB] p-3 text-[#142B42] text-[14px] font-medium">30</div>
              <div className="border-r border-[#E5E7EB] p-3 text-[#A0ABBB] text-[14px] font-medium">1</div>
              <div className="border-r border-[#E5E7EB] p-3 text-[#A0ABBB] text-[14px] font-medium">2</div>
              <div className="p-3 text-[#A0ABBB] text-[14px] font-medium">3</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
