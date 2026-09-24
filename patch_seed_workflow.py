import sys

with open('drizzle/seed.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'is_published: true,',
    "is_published: true,\n        workflow_status: 'published',"
)

with open('drizzle/seed.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated seed.ts")
