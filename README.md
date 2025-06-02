
# RB TAXI – Výčetka

Moderní webová aplikace pro výpočet výplaty řidiče taxi služby s plnou podporou mobilních zařízení a offline použití (PWA).

## 🚀 Funkce

- Výpočet výplaty na základě tržby, kilometrů a nákladů
- Upozornění na minimální požadovanou tržbu (15 Kč/km)
- Výplata dle typu směny (1/2, denní, noční)
- Export do PDF s názvem řidiče
- Přehledná historie posledních výpočtů (localStorage)
- Světlý a tmavý režim (přepínač)
- Offline funkčnost (PWA)
- Ikony pro přidání na plochu (Android & iOS)

## 📲 Jak používat

1. Nahraj celý obsah repozitáře na GitHub
2. V nastavení GitHub Pages:
   - Zdroj: `main` (nebo jiný branch)
   - Cesta: `/ (root)`
3. Aplikaci otevři na mobilu nebo desktopu
4. Přidej na plochu pro plnohodnotný PWA zážitek

## 📂 Soubory

| Soubor               | Účel                                 |
|----------------------|--------------------------------------|
| `index.html`         | Hlavní rozhraní aplikace             |
| `style.css`          | Vzhled a responzivní styly           |
| `app.js`             | Výpočet, animace, export, historie   |
| `manifest.json`      | Metadata pro PWA a ikony             |
| `service-worker.js`  | Offline podpora                      |
| `icon-192.png`       | Android ikona                        |
| `icon-512.png`       | Splash screen                        |
| `apple-touch-icon.png` | iOS ikona                          |

## 🛠 Technologie

- HTML5 + CSS3
- JavaScript (vanilla)
- html2canvas + jsPDF pro PDF export
- LocalStorage pro historii výpočtů
- FontAwesome + Google Fonts

## 🧪 Testování

- Otestováno na Safari, Chrome, Firefox (desktop i mobil)
- Funkční na iOS i Android
- Funkční offline po přidání na plochu
- PDF export testován na většině mobilních zařízení

---

🟨 Pokud narazíte na chybu nebo máte návrh na vylepšení, otevřete issue nebo mě kontaktujte.
