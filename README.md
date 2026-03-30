# 📰 MANSHET - Güncel Haber ve Manşet Takip Sistemi

**MANSHET**, NewsAPI servisinden gelen verileri anlık olarak işleyen, kullanıcı dostu ve güvenli bir haber agregatörü uygulamasıdır. Proje, modern web standartları ve Full-stack mimari prensipleriyle geliştirilmiştir.

---

## 🚀 Öne Çıkan Özellikler

* [cite_start]**🛡️ Güvenli Proxy Katmanı:** API anahtarının istemci tarafında ifşa olmaması için Node.js üzerinden vekil sunucu yapılandırması. [cite: 124]
* [cite_start]**⚡ Performans Odaklılık:** Tekrarlanan API isteklerini önlemek için `sessionStorage` tabanlı önbellekleme. [cite: 156, 157]
* [cite_start]**📂 Kategorisel Filtreleme:** İş, Eğlence, Sağlık, Bilim, Spor ve Teknoloji alanlarında dinamik haber akışı. [cite: 84]
* [cite_start]**📱 Responsive Tasarım:** Tüm cihazlarda (mobil, tablet, masaüstü) kusursuz görüntülenen modern arayüz. [cite: 35, 94]
* [cite_start]**🧩 Dinamik İçerik:** URL parametreleri sayesinde tek bir şablon üzerinden binlerce haber detayını gösterebilme yeteneği. [cite: 154]

---

## 🛠️ Teknoloji Yığını

### Frontend
- [cite_start]**Dil:** Vanilla JavaScript (ES6+)
- [cite_start]**Yapı & Stil:** HTML5, CSS3
- [cite_start]**İletişim:** Axios (HTTP Client)

### Backend
- [cite_start]**Platform:** Node.js
- [cite_start]**Framework:** Express.js
- [cite_start]**Güvenlik:** Dotenv (.env yönetimi) ve CORS

---

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın:**
   ```bash
   git clone [https://github.com/frknecn3/grad-project.git](https://github.com/frknecn3/grad-project.git)
   ```

2. **Bağımlılıkları yükleyin:**
   ```cd manshet/backend
    npm install
   ```

3. **Çevresel değişkenleri ayarlayın:**
   .env dosyasını oluşturup News API anahtarınızı ekleyin
   ```
   API_KEY=your_api_key_here
   ```
4. **Backend sunucusunu çalıştırın**
    Terminaliniz /backend klasörünün içindeyken
    ```
        npm start
    ```
5. **Arayüzü açın**
    Ana klasördeki index.html dosyasını açın.

<hr>

🎓 Akademik Not:

Bu proje, Marmara Üniversitesi Bilgisayar Programcılığı Bölümü bitirme projesi kapsamında geliştirilmiştir. 

Geliştirici: Furkan Ercan 

© 2026 MANSHET News | Tüm Hakları Saklıdır. 