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
