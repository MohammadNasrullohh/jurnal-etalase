import sys

with open('src/views/landing/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add state variables for dropdowns
target_state = "const [isLoginOpen, setIsLoginOpen] = useState(false)"
replacement_state = "const [isLoginOpen, setIsLoginOpen] = useState(false)\n  const [isKategoriOpen, setIsKategoriOpen] = useState(false)\n  const [isTahunOpen, setIsTahunOpen] = useState(false)\n  const kategoriRef = useRef<HTMLDivElement>(null)\n  const tahunRef = useRef<HTMLDivElement>(null)\n\n  // Click outside listener for custom dropdowns\n  useEffect(() => {\n    function handleClickOutside(event: MouseEvent) {\n      if (kategoriRef.current && !kategoriRef.current.contains(event.target as Node)) setIsKategoriOpen(false)\n      if (tahunRef.current && !tahunRef.current.contains(event.target as Node)) setIsTahunOpen(false)\n    }\n    document.addEventListener('mousedown', handleClickOutside)\n    return () => document.removeEventListener('mousedown', handleClickOutside)\n  }, [])"

content = content.replace(target_state, replacement_state)

# 2. Replace Kategori Dropdown
target_kategori = """                    {/* Kategori Dropdown */}
                    <div className="relative h-[62px] w-full md:max-w-[230px] flex-1 bg-[#F8FAFC] border border-[#737272]/50 rounded-[20px] flex items-center hover:border-[#F7921C]/50 transition-colors">
                      <select 
                        className="w-full h-full bg-transparent text-[#5D6A77] text-[14px] font-medium outline-none pl-6 pr-12 cursor-pointer appearance-none z-10"
                        value={kategori}
                        onChange={(e) => setFilter(q, e.target.value, tahun)}
                      >
                        <option value="">Semua Kategori</option>
                          <option value="Penanganan Pelanggaran">Penanganan Pelanggaran</option>
                          <option value="Penyelesaian Sengketa">Penyelesaian Sengketa</option>
                      </select>
                      <svg className="w-5 h-5 text-[#9CA3AF] absolute right-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </div>"""

replacement_kategori = """                    {/* Kategori Dropdown */}
                    <div className="relative h-[62px] w-full md:max-w-[230px] flex-1 bg-[#F8FAFC] border border-[#737272]/50 rounded-[20px] transition-colors hover:border-[#F7921C]/50" ref={kategoriRef}>
                      <div 
                        className="w-full h-full flex items-center justify-between px-6 cursor-pointer text-[#5D6A77] text-[14px] font-medium"
                        onClick={() => setIsKategoriOpen(!isKategoriOpen)}
                      >
                        <span className="truncate">{kategori || "Semua Kategori"}</span>
                        <svg className={`w-5 h-5 text-[#9CA3AF] transition-transform duration-200 ${isKategoriOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                      
                      {isKategoriOpen && (
                        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-[#E2E8F0] rounded-[16px] shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="py-2">
                            {[
                              { label: "Semua Kategori", val: "" },
                              { label: "Penanganan Pelanggaran", val: "Penanganan Pelanggaran" },
                              { label: "Penyelesaian Sengketa", val: "Penyelesaian Sengketa" }
                            ].map((opt) => (
                              <div 
                                key={opt.label}
                                className={`px-5 py-3 text-[14px] cursor-pointer transition-colors ${kategori === opt.val ? 'bg-[#F7921C]/10 text-[#F7921C] font-bold' : 'text-[#475569] hover:bg-slate-50 font-medium'}`}
                                onClick={() => {
                                  setFilter(q, opt.val, tahun);
                                  setIsKategoriOpen(false);
                                }}
                              >
                                {opt.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>"""

content = content.replace(target_kategori, replacement_kategori)

# 3. Replace Tahun Dropdown
target_tahun = """                    {/* Tahun Dropdown */}
                    <div className="relative h-[62px] w-full md:max-w-[190px] flex-1 bg-[#F8FAFC] border border-[#737272]/50 rounded-[20px] flex items-center hover:border-[#F7921C]/50 transition-colors">
                      <select 
                        className="w-full h-full bg-transparent text-[#5D6A77] text-[14px] font-medium outline-none pl-6 pr-12 cursor-pointer appearance-none z-10"
                        value={tahun}
                        onChange={(e) => setFilter(q, kategori, e.target.value)}
                      >
                        <option value="">Semua Tahun</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                      </select>
                      <svg className="w-5 h-5 text-[#9CA3AF] absolute right-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </div>"""

replacement_tahun = """                    {/* Tahun Dropdown */}
                    <div className="relative h-[62px] w-full md:max-w-[190px] flex-1 bg-[#F8FAFC] border border-[#737272]/50 rounded-[20px] transition-colors hover:border-[#F7921C]/50" ref={tahunRef}>
                      <div 
                        className="w-full h-full flex items-center justify-between px-6 cursor-pointer text-[#5D6A77] text-[14px] font-medium"
                        onClick={() => setIsTahunOpen(!isTahunOpen)}
                      >
                        <span className="truncate">{tahun || "Semua Tahun"}</span>
                        <svg className={`w-5 h-5 text-[#9CA3AF] transition-transform duration-200 ${isTahunOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                      
                      {isTahunOpen && (
                        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-[#E2E8F0] rounded-[16px] shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="py-2">
                            {[
                              { label: "Semua Tahun", val: "" },
                              { label: "2026", val: "2026" },
                              { label: "2025", val: "2025" }
                            ].map((opt) => (
                              <div 
                                key={opt.label}
                                className={`px-5 py-3 text-[14px] cursor-pointer transition-colors ${tahun === opt.val ? 'bg-[#F7921C]/10 text-[#F7921C] font-bold' : 'text-[#475569] hover:bg-slate-50 font-medium'}`}
                                onClick={() => {
                                  setFilter(q, kategori, opt.val);
                                  setIsTahunOpen(false);
                                }}
                              >
                                {opt.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>"""

content = content.replace(target_tahun, replacement_tahun)

with open('src/views/landing/index.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated dropdowns successfully")
