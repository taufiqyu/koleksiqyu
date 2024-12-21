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
    const interval = 5000; // 5 detik untuk setiap slide

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
    const email = document.getElementById("email").value;
    const package = document.getElementById("package").value;
    const message = document.getElementById("message").value;

    // Nomor WhatsApp tujuan (ganti dengan nomor Anda tanpa tanda + atau 0 di depan)
    const phoneNumber = "6285645251595";

    // Format pesan
    const text = `Halo, saya ingin memesan undangan digital!%0A%0A` +
        `Nama: ${name}%0A` +
        `Email: ${email}%0A` +
        `Paket: ${package}%0A` +
        `Pesan Tambahan: ${message || "Tidak ada"}%0A%0A` +
        `Terima kasih!`;

    // Redirect ke WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
});
