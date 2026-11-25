/* ==========================================================================
   PROFIL WISATA PANTAI LUARI - JAVASCRIPT
   Fitur: Toggle Nav Mobile, Scroll Active Link, Lightbox Galeri, Form Kontak
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Toggle Navigation Menu (Mobile)
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Tutup menu saat link diklik (khusus mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Active Link Highlight saat Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Lightbox Modal Galeri Foto
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.querySelector('.modal-close');
  const galeriItems = document.querySelectorAll('.galeri-item');

  galeriItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');
      const caption = item.getAttribute('data-caption');

      if (modal && modalImg && modalCaption) {
        modal.style.display = 'block';
        modalImg.src = src;
        modalCaption.textContent = caption;
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Tutup modal saat klik area luar gambar
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // 4. Form Kontak -> kirim pesan ke WhatsApp pengelola
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // Nomor WhatsApp pengelola (format internasional, tanpa + dan tanpa tanda hubung)
  const WA_NUMBER = '6285651442654';

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const kontak = document.getElementById('telepon').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      // Susun pesan WhatsApp
      const teks = [
        `Halo Pengelola Wisata Pantai Luari,`,
        ``,
        `Nama: ${nama}`,
        `Kontak: ${kontak}`,
        ``,
        `Pesan:`,
        pesan
      ].join('\n');

      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

      // Buka WhatsApp (tab baru; di HP langsung membuka aplikasi)
      const win = window.open(waUrl, '_blank', 'noopener');

      // Tampilkan konfirmasi + tautan cadangan bila popup diblokir
      formStatus.className = 'form-status success';
      formStatus.style.display = 'block';
      formStatus.innerHTML =
        `<i class="fa-solid fa-circle-check"></i> Terima kasih <strong>${nama}</strong>! ` +
        `WhatsApp Anda sudah dibuka — tekan <strong>Kirim</strong> di sana agar pesan sampai ke pengelola. ` +
        (win ? '' : `<a href="${waUrl}" target="_blank" rel="noopener">Klik di sini jika WhatsApp tidak terbuka.</a>`);

      contactForm.reset();

      // Sembunyikan notifikasi setelah 10 detik
      clearTimeout(formStatus._hideTimer);
      formStatus._hideTimer = setTimeout(() => {
        formStatus.style.display = 'none';
      }, 10000);
    });
  }
});
