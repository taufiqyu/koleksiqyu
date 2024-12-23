// script.js
document.addEventListener("DOMContentLoaded", () => {
    const featureCards = document.querySelectorAll(".feature-card");

    // Tambahkan animasi hover
    featureCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseout", () => {
            card.classList.remove("hovered");
        });
    });

    // Optional: Konfigurasi Carousel
    const carousel = document.querySelector("#featuresCarousel");
    const interval = 4000; // 5 detik untuk setiap slide

    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: interval,
            wrap: true,
        });
    }
});

document.getElementById("submitToWhatsApp").addEventListener("click", function () {
    // Ambil data dari form
    const name = document.getElementById("name").value;
    const design = document.getElementById("design").value;
    const package = document.getElementById("package").value;
    const message = document.getElementById("message").value;

    // Nomor WhatsApp tujuan (ganti dengan nomor Anda tanpa tanda + atau 0 di depan)
    const phoneNumber = "6285645251595";

    // Format pesan
    const text = `Halo, saya ingin memesan undangan digital!%0A%0A` +
        `Nama: ${encodeURIComponent(name)}%0A` +
        `Design: ${encodeURIComponent(design)}%0A` +
        `Paket: ${encodeURIComponent(package)}%0A` +
        `Pesan Tambahan: ${encodeURIComponent(message || "Tidak ada")}%0A%0A` +
        `Terima kasih!`;

    // Redirect ke WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
});

// Inisialisasi tooltip
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Fungsi untuk menyalin teks ke clipboard dan mengubah tooltip
    function copyToClipboard(elementId, buttonId) {
      const text = document.getElementById(elementId).textContent;
      navigator.clipboard.writeText(text).then(() => {
        const button = document.getElementById(buttonId);
        const tooltipInstance = bootstrap.Tooltip.getInstance(button);
        tooltipInstance.setContent({ '.tooltip-inner': 'Tersalin!' }); // Ubah pesan tooltip
        tooltipInstance.show();
        setTimeout(() => {
          tooltipInstance.setContent({ '.tooltip-inner': 'Salin Nomor' }); // Kembalikan pesan tooltip
        }, 2000);
      }).catch(err => {
        alert('Gagal menyalin teks: ' + err);
      });
    }
