import asyncio
from playwright.async_api import async_playwright

html_content = """
<!DOCTYPE html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  body {
    margin: 0;
    padding: 50px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    width: 298px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 16px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 28px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .left-accent {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 12px;
    background-color: #507CF1;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .date-text {
    color: #507CF1;
    font-weight: 600;
    font-size: 16px;
  }
  .title-row, .subtitle-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .dot {
    width: 6px;
    height: 6px;
    background-color: #507CF1;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .title-text {
    color: #64809D;
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
  }
  .subtitle-text {
    color: #64809D;
    font-weight: 500;
    font-size: 12px;
  }
</style>
</head>
<body>
  <div class="card" id="target-card">
    <div class="left-accent"></div>
    
    <div class="header">
      <div class="header-left">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#507CF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span class="date-text">8 Sept 2026</span>
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#507CF1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>

    <div class="title-row">
      <div class="dot"></div>
      <span class="title-text">Rapat Evaluasi Kegiatan</span>
    </div>

    <div class="subtitle-row">
      <div class="dot"></div>
      <span class="subtitle-text">Ruang Aula Bawaslu</span>
    </div>

  </div>
</body>
</html>
"""

async def main():
    with open("temp_card.html", "w") as f:
        f.write(html_content)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(device_scale_factor=3) # HD quality (3x)
        await page.goto(f"file:///{__file__.replace('generate_card.py', 'temp_card.html')}")
        
        # Wait for fonts to load
        await page.wait_for_timeout(2000)
        
        card = await page.query_selector("#target-card")
        await card.screenshot(path="public/assets/floating_event_card.png", omit_background=True)
        
        print("Successfully generated public/assets/floating_event_card.png")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
