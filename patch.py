import sys
import re

with open('src/entities/jurnal/api/get-jurnal-list.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'(judul:\s*jurnal\.judul,)', r'\1\n      ringkasan: jurnal.ringkasan,', content)

with open('src/entities/jurnal/api/get-jurnal-list.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Added ringkasan to get-jurnal-list.ts")
