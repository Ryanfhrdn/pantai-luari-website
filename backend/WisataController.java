package com.pantailuari.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/wisata")
@CrossOrigin(origins = "*")
public class WisataController {

    // REST Endpoint untuk menerima pesan dari pengunjung website
    @PostMapping("/kontak")
    public Map<String, Object> simpanPesan(@RequestBody Map<String, String> payload) {
        String nama = payload.get("nama");
        String telepon = payload.get("telepon");
        String pesan = payload.get("pesan");

        // Logika simpan ke MySQL database / log sistem
        System.out.println("Pesan Baru dari: " + nama + " (" + telepon + "): " + pesan);

        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Pesan dari " + nama + " berhasil diterima!");
        return response;
    }

    // REST Endpoint untuk mendapatkan data fasilitas
    @GetMapping("/fasilitas")
    public List<Map<String, String>> getFasilitas() {
        List<Map<String, String>> list = new ArrayList<>();

        Map<String, String> f1 = new HashMap<>();
        f1.put("nama", "Area Parkir Luas");
        f1.put("deskripsi", "Tersedia area parkir aman kendaraan roda 2 & roda 4");
        list.add(f1);

        Map<String, String> f2 = new HashMap<>();
        f2.put("nama", "Toilet & Kamar Bilas");
        f2.put("deskripsi", "Fasilitas toilet & tempat bilas bersih setelah berenang");
        list.add(f2);

        return list;
    }
}
