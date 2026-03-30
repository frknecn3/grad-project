# 📰 MANSHET - Güncel Haber ve Manşet Takip Sistemi

**MANSHET**, NewsAPI servisinden gelen verileri anlık olarak işleyen, kullanıcı dostu ve güvenli bir haber agregatörü uygulamasıdır. Proje, modern web standartları ve Full-stack mimari prensipleriyle geliştirilmiştir.

---

## 🚀 Öne Çıkan Özellikler

* **🛡️ Güvenli Proxy Katmanı:** API anahtarının istemci tarafında ifşa olmaması için Node.js üzerinden vekil sunucu yapılandırması.
* **⚡ Performans Odaklılık:** Tekrarlanan API isteklerini önlemek için `sessionStorage` tabanlı önbellekleme.
* **📂 Kategorisel Filtreleme:** İş, Eğlence, Sağlık, Bilim, Spor ve Teknoloji alanlarında dinamik haber akışı.
* **📱 Responsive Tasarım:** Tüm cihazlarda (mobil, tablet, masaüstü) kusursuz görüntülenen modern arayüz.
* **🧩 Dinamik İçerik:** URL parametreleri sayesinde tek bir şablon üzerinden binlerce haber detayını gösterebilme yeteneği.

---

## 🛠️ Teknoloji Yığını

### Frontend
- **Dil:** Vanilla JavaScript (ES6+)
- **Yapı & Stil:** HTML5, CSS3
- **İletişim:** Axios (HTTP Client)

### Backend
- **Platform:** Node.js
- **Framework:** Express.js
- **Güvenlik:** Dotenv (.env yönetimi) ve CORS

---

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın:**
   ```
   git clone https://github.com/frknecn3/grad-project.git
   ```

2. **Bağımlılıkları yükleyin:**
   ```
    cd grad-project/backend
    npm install
   ```

3. **Çevresel değişkenleri ayarlayın:**<br>
   .env dosyasını oluşturup News API anahtarınızı ekleyin
   ```
   API_KEY=your_api_key_here
   ```
4. **Backend sunucusunu çalıştırın**<br>
    Terminaliniz /backend klasörünün içindeyken
    ```
    npm start
    ```
5. **Arayüzü açın**<br>
    Ana klasördeki index.html dosyasını açın.

<hr>

🎓 Akademik Not:

Bu proje, Marmara Üniversitesi Bilgisayar Programcılığı Bölümü bitirme projesi kapsamında geliştirilmiştir. 

Geliştirici: Furkan Ercan 

© 2026 MANSHET | Tüm Hakları Saklıdır.