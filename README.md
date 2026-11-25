# 🏖️ Website Profil Wisata Pantai Luari

Website resmi profil **Wisata Pantai Luari**, Desa Luari, Kabupaten Halmahera Utara, Provinsi Maluku Utara.

---

## 📌 Fitur & Halaman Website

1. **Beranda**: Banner hero besar beresolusi tinggi, kalimat penyambung, dan tombol navigasi utama.
2. **Profil**: Informasi sejarah singkat, daya tarik alam, serta potensi pariwisata Desa Luari.
3. **Galeri Foto**: Grid foto Pantai Luari dengan fitur **Lightbox Modal** untuk memperbesar foto saat diklik.
4. **Fasilitas**: Informasi fasilitas pendukung seperti Area Parkir, Toilet/Kamar Bilas, Gazebo, dan Warung Makan.
5. **Informasi Wisata**: Card berisi Lokasi, Jam Operasional, Tiket Masuk, Biaya Parkir, dan **Aturan Pengunjung**.
6. **Lokasi**: Alamat lengkap beserta peta interaktif Google Maps / OpenStreetMap.
7. **Kontak**: Detail pengelola, WhatsApp/Telepon, Media Sosial, serta **Formulir Pesan Interaktif**.
8. **Responsif**: Tampilan dapat menyesuaikan layar Laptop/Desktop maupun HP/Tablet.

---

## 🎨 Skema Warna & Desain

- **Biru Laut**: `#0284c7` (Primary Ocean Blue) & `#0c4a6e` (Deep Sea)
- **Hijau Nature**: `#059669` (Fresh Palm Green)
- **Putih / Clean**: `#ffffff` & `#f8fafc`

---

## 📁 Struktur File Proyek

```text
pantai-luari-website/
├── index.html        # Struktur HTML utama website
├── style.css         # Desain CSS & tampilan responsif
├── script.js         # Interaksi JavaScript (Nav, Modal Galeri, Form)
├── README.md         # Dokumentasi & panduan penggunaan
└── backend/          # (Opsional) Java Spring Boot REST API & MySQL Schema
    ├── schema.sql    # File skema database MySQL
    └── WisataController.java
```

---

## 🚀 Cara Menjalankan Website (Tanpa Server / Standalone)

1. Unduh atau buka direktori proyek `pantai-luari-website`.
2. Buka file **`index.html`** langsung menggunakan peramban web (Chrome, Firefox, Edge, Safari).
3. Atau gunakan ekstensi **Live Server** di VS Code untuk preview langsung.

---

## ⚙️ Opsional: Menjalankan Backend Java Spring Boot & MySQL

Jika ingin menghubungkan formulir pesan ke database MySQL via Java Spring Boot:
1. Impor `backend/schema.sql` ke dalam MySQL Server Anda.
2. Tambahkan dependensi `spring-boot-starter-web` & `spring-boot-starter-data-jpa` pada Maven `pom.xml`.
3. Jalankan aplikasi Spring Boot (`WisataApplication.java`).

---

© 2026 Wisata Pantai Luari – Desa Luari, Halmahera Utara.
