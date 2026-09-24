import sys

with open('src/app/api/jurnal/route.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '        judul: item.judul,\n        tanggal_kegiatan: item.tanggal_kegiatan,',
    '        judul: item.judul,\n        ringkasan: item.ringkasan,\n        tanggal_kegiatan: item.tanggal_kegiatan,'
)

with open('src/app/api/jurnal/route.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated API route")
