import sys

with open('src/views/landing/index.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if 'SECTION 3 — ARSIP JURNAL' in line or 'SECTION 3 - ARSIP JURNAL' in line:
        start_idx = i
    if '{/* Login Modal Overlay */}' in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_arsip = """
        {/* SECTION 3 - ARSIP JURNAL */}
        <section
          id="section-arsip"
          ref={section3Ref}
          className="relative w-full bg-[#F8F9FA] pb-24"
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-10 pt-10">
            
            {/* Search Bar Capsule */}
            <div className="bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E5E7EB] p-2 flex flex-col md:flex-row items-center justify-between mb-12 max-w-[1200px] mx-auto" style={{ fontFamily: 'Poppins' }}>
              <div className="flex-1 flex items-center px-4 w-full md:w-auto mb-2 md:mb-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A0ABBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input 
                  type="text" 
                  placeholder="Cari judul artikel, topik, penulis (contoh : parmas, netralitas, verifikasi)" 
                  className="w-full bg-transparent outline-none text-[#142B42] text-[14px] placeholder:text-[#A0ABBB]"
                  value={q}
                  onChange={(e) => setFilter(e.target.value, kategori)}
                />
              </div>
              
              <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="h-[40px] w-[1px] bg-[#E5E7EB] hidden md:block"></div>
                <select 
                  className="bg-transparent text-[#5D6A77] text-[14px] font-medium outline-none px-4 cursor-pointer appearance-none bg-no-repeat pr-8"
                  style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%23A0ABBB%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")', backgroundPosition: 'right 0.5rem center' }}
                  value={kategori}
                  onChange={(e) => setFilter(q, e.target.value)}
                >
                  <option value="">Semua Kategori</option>
                  <option value="sosialisasi">Sosialisasi</option>
                  <option value="rapat">Rapat Evaluasi</option>
                </select>

                <div className="h-[40px] w-[1px] bg-[#E5E7EB] hidden md:block"></div>
                <select 
                  className="bg-transparent text-[#5D6A77] text-[14px] font-medium outline-none px-4 cursor-pointer appearance-none bg-no-repeat pr-8"
                  style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%23A0ABBB%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")', backgroundPosition: 'right 0.5rem center' }}
                >
                  <option value="">Semua Tahun</option>
                  <option value="2026">2026</option>
                </select>

                <button className="bg-[#F7921C] hover:bg-[#e08316] text-white px-8 py-3 rounded-full font-semibold text-[14px] flex items-center gap-2 transition-colors ml-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  Cari
                </button>
              </div>
            </div>

            {/* Jurnal Grid List */}
            <JurnalList
              q={q}
              kategori={kategori}
              activeId={activeId}
              setActiveId={setActiveId}
              onActiveDateChange={setActiveDate}
              onCardClick={(id) => {
                setSelectedJurnalId(id)
              }}
            />

          </div>
        </section>

        <JurnalDetailModal
          id={selectedJurnalId}
          isOpen={!!selectedJurnalId}
          onClose={() => setSelectedJurnalId(null)}
        />
      </div>
"""
    lines = lines[:start_idx] + [new_arsip + '\n'] + lines[end_idx:]
    with open('src/views/landing/index.tsx', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Section 3 successfully replaced!")
else:
    print(f"Failed to find indices. Start: {start_idx}, End: {end_idx}")
