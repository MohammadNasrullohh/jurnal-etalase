import sys

with open('src/widgets/stats-section/ui/StatsModal.client.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"',
    '<div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"'
)

with open('src/widgets/stats-section/ui/StatsModal.client.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated z-index of StatsModal to z-[200]")
