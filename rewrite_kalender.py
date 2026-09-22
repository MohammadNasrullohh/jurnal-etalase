import re

with open('src/views/landing/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new Kalender section
new_kalender = """{/* 4. Kalender Full Section */}
      <section className="container mx-auto px-6 lg:px-20 mb-12 max-w-[1440px]">
        <div className="bg-white rounded-[32px] shadow-sm flex flex-col xl:flex-row border border-[#E8ECEF] overflow-hidden">
          
          {/* Left: Mini Calendar */}
          <div className="w-full xl:w-[320px] flex-shrink-0 p-8 border-b xl:border-b-0 xl:border-r border-[#E8ECEF]">
            <div className="flex items-center mb-8">
              <h3 className="font-semibold text-[20px] text-[#142B42] mr-3" style={{ fontFamily: 'Poppins' }}>Kalender</h3>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              <span className="font-semibold text-[14px] text-[#142B42]" style={{ fontFamily: 'Poppins' }}>September 2026</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </div>
            
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center">
              {['Ming','Sen','Sel','Rab','Kam','Jum','Sab'].map((d,i) => <div key={i} className="text-[#7B7A7A] font-medium text-[9px]">{d}</div>)}
              {[null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null].map((d,i) => (
                <div key={i} className="flex flex-col items-center justify-center relative h-6">
                  {d && (
                    <>
                      <div className={`w-6 h-6 flex items-center justify-center rounded-full text-[11px] ${d === 16 ? 'bg-[#4F83F5] text-white font-semibold' : 'text-[#142B42]'}`}>
                        {d}
                      </div>
                      {[1,2,4,7,13,14].includes(d) && (
                        <div className="w-1 h-1 rounded-full bg-[#F7921C] absolute -bottom-1"></div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Full Month Grid */}
          <div className="flex-1 flex flex-col p-8 bg-white">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center gap-6">
                <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg></button>
                <h3 className="font-semibold text-[24px] text-[#142B42]" style={{ fontFamily: 'Poppins' }}>September 2026</h3>
                <button><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#142B42" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg></button>
              </div>
              <div className="flex items-center bg-[#F9FAFB] rounded-full p-1 border border-[#E8ECEF]">
                <button className="px-6 py-2 rounded-full text-[#7B7A7A] text-[13px] font-medium" style={{ fontFamily: 'Poppins' }}>Hari</button>
                <button className="px-6 py-2 rounded-full text-[#7B7A7A] text-[13px] font-medium" style={{ fontFamily: 'Poppins' }}>Minggu</button>
                <button className="px-6 py-2 rounded-full bg-[#142B42] text-white text-[13px] font-medium shadow-sm" style={{ fontFamily: 'Poppins' }}>Bulan</button>
              </div>
            </div>

            {/* Grid */}
            <div className="w-full border-t border-l border-[#E8ECEF] rounded-[16px] overflow-hidden bg-white">
              {/* Row 1 with Headers */}
              <div className="grid grid-cols-7">
                {[
                  { d: 'Ming', n: '30', ev: null, out: true },
                  { d: 'Sen', n: '31', ev: null, out: true },
                  { d: 'Sel', n: '1', ev: 'Rapat Evaluasi', out: false },
                  { d: 'Rab', n: '2', ev: 'Rapat Evaluasi', out: false },
                  { d: 'Kam', n: '3', ev: null, out: false },
                  { d: 'Jum', n: '4', ev: 'Rapat Evaluasi', out: false },
                  { d: 'Sab', n: '5', ev: null, out: false }
                ].map((item, i) => (
                  <div key={i} className="border-r border-b border-[#E8ECEF] p-3 min-h-[120px] flex flex-col">
                    <span className="text-[#142B42] font-semibold text-[14px] mb-1" style={{ fontFamily: 'Poppins' }}>{item.d}</span>
                    <span className={`text-[14px] font-medium ${item.out ? 'text-[#A0AAB4]' : 'text-[#142B42]'}`}>{item.n}</span>
                    {item.ev && (
                      <div className="mt-2 bg-[#FFD19C] text-[#D47706] text-[10px] px-2 py-1 rounded-md font-semibold truncate">
                        {item.ev}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Row 2 */}
              <div className="grid grid-cols-7">
                {[
                  { n: '6', ev: null }, { n: '7', ev: 'Rapat Evaluasi' }, { n: '8', ev: null }, 
                  { n: '9', ev: null }, { n: '10', ev: null }, { n: '11', ev: null }, { n: '12', ev: null }
                ].map((item, i) => (
                  <div key={i} className="border-r border-b border-[#E8ECEF] p-3 min-h-[120px] flex flex-col">
                    <span className="text-[14px] font-medium text-[#142B42] mb-1">{item.n}</span>
                    {item.ev && (
                      <div className="mt-1 bg-[#FFD19C] text-[#D47706] text-[10px] px-2 py-1 rounded-md font-semibold truncate">
                        {item.ev}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-7">
                {[
                  { n: '13', ev: 'Rapat Evaluasi' }, { n: '14', ev: 'Rapat Evaluasi' }, { n: '15', ev: null }, 
                  { n: '16', ev: null, today: true }, { n: '17', ev: null }, { n: '18', ev: null }, { n: '19', ev: null }
                ].map((item, i) => (
                  <div key={i} className="border-r border-b border-[#E8ECEF] p-3 min-h-[120px] flex flex-col">
                    {item.today ? (
                      <div className="w-8 h-8 rounded-full bg-[#4F83F5] text-white flex items-center justify-center text-[14px] font-medium mb-1">
                        {item.n}
                      </div>
                    ) : (
                      <span className="text-[14px] font-medium text-[#142B42] mb-1">{item.n}</span>
                    )}
                    {item.ev && (
                      <div className="mt-1 bg-[#FFD19C] text-[#D47706] text-[10px] px-2 py-1 rounded-md font-semibold truncate">
                        {item.ev}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-7">
                {[20, 21, 22, 23, 24, 25, 26].map((n, i) => (
                  <div key={i} className="border-r border-b border-[#E8ECEF] p-3 min-h-[120px] flex flex-col">
                    <span className="text-[14px] font-medium text-[#142B42]">{n}</span>
                  </div>
                ))}
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-7">
                {[
                  { n: '27', out: false }, { n: '28', out: false }, { n: '29', out: false }, 
                  { n: '30', out: false }, { n: '1', out: true }, { n: '2', out: true }, { n: '4', out: true }
                ].map((item, i) => (
                  <div key={i} className="border-r border-[#E8ECEF] p-3 min-h-[120px] flex flex-col">
                    <span className={`text-[14px] font-medium ${item.out ? 'text-[#A0AAB4]' : 'text-[#142B42]'}`}>{item.n}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>"""

# Find the section to replace
start_idx = content.find("{/* 4. Kalender Full Section */}")
end_idx = content.find("{/* 5. Search Bar */}")

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_kalender + "\n\n      " + content[end_idx:]
    with open('src/views/landing/index.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Success")
else:
    print("Could not find boundaries")
