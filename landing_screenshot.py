from playwright.sync_api import sync_playwright

def take_screenshot():
    with sync_playwright() as p:
        print("Menjalankan browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Ukuran standar Desktop 1920x1080
        page.set_viewport_size({"width": 1920, "height": 1080})
        
        print("Memuat web http://localhost:3000 ...")
        # Pastikan web dev server kamu sedang jalan di port 3000
        try:
            page.goto("http://localhost:3000")
        except Exception as e:
            print(f"? Gagal memuat web: {e}")
            print("?? Pastikan 'npm run dev' sedang berjalan!")
            
        # Buka URL awal
        print("Memuat web http://localhost:3000 ...")
        page.goto("http://localhost:3000")
        
        page.wait_for_timeout(3000)

        # Klik tombol Login untuk membuka Modal
        print("Membuka form Login...")
        page.evaluate("window.scrollTo(0, 0)")
        # Arahkan ke Landing Page
        print("Memuat web http://localhost:3000 ...")
        page.goto("http://localhost:3000/")
        
        print("Menunggu halaman selesai dimuat...")
        page.wait_for_timeout(2000)

        # Klik tombol Login untuk membuka Modal
        print("Membuka form Login...")
        page.locator("button:has-text('Login')").first.evaluate("el => el.click()")
        page.wait_for_timeout(500)

        # Mengetik PIN (tanpa menekan enter, asumsikan auto-submit di 4 digit)
        print("Mengetik PIN 1-2-3-4 secara berurutan...")
        page.locator("input[type='password']").nth(0).click()
        page.keyboard.type("1234", delay=200)

        # Tunggu proses redirect otomatis
        print("Menunggu redirect otomatis ke Panel Arsip...")
        page.wait_for_url("http://localhost:3000/panel", timeout=30000)

        # Mengklik tab Jurnal Saya
        print("Membuka tab Jurnal Saya...")
        try:
            page.locator("button", has_text="Jurnal Saya").click()
            page.wait_for_timeout(1000)
        except:
            pass # Jika sudah berada di tab tersebut
        
        print("Mengambil screenshot tab Jurnal Saya...")
        # Scroll sedikit ke bawah agar form terlihat (opsional)
        page.evaluate("window.scrollTo(0, 0)")
        page.wait_for_timeout(500)
        page.screenshot(path="landing_screenshot.png", full_page=True)
        
        print("Selesai! Screenshot berhasil disimpan sebagai 'landing_screenshot.png'")
        browser.close()

if __name__ == "__main__":
    take_screenshot()
