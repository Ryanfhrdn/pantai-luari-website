-- ==========================================================
-- DATABASE SCHEMA: db_pantai_luari
-- Database MySQL untuk Website Wisata Pantai Luari
-- ==========================================================

CREATE DATABASE IF NOT EXISTS db_pantai_luari;
USE db_pantai_luari;

-- 1. Tabel Pesan Kontak
CREATE TABLE IF NOT EXISTS pesan_kontak (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    telepon VARCHAR(50) NOT NULL,
    pesan TEXT NOT NULL,
    tanggal_kirim DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Fasilitas Wisata (opsional untuk data dinamis)
CREATE TABLE IF NOT EXISTS fasilitas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_fasilitas VARCHAR(100) NOT NULL,
    deskripsi TEXT,
    ikon VARCHAR(50)
);

INSERT INTO fasilitas (nama_fasilitas, deskripsi, ikon) VALUES
('Area Parkir Luas', 'Tersedia area parkir untuk roda 2 dan roda 4', 'fa-square-parking'),
('Toilet & Kamar Bilas', 'Fasilitas umum dan kamar bilas bersih', 'fa-restroom'),
('Tempat Istirahat', 'Gazebo & saung santai tepi pantai', 'fa-umbrella-beach'),
('Warung Makan', 'Penyedia kuliner pesisir & es kelapa segar', 'fa-utensils');
