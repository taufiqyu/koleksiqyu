//preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
});

//overlay
document.addEventListener("DOMContentLoaded", function () {
    // Tambahkan Bootstrap jika belum ada
    let bootstrapCDN = document.createElement("link");
    bootstrapCDN.rel = "stylesheet";
    bootstrapCDN.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapCDN);

    // Buat elemen overlay
    let overlay = document.createElement("div");
    overlay.id = "overlayPromo";
    overlay.className = "d-flex justify-content-center align-items-center p-2";
    overlay.innerHTML = `
        <div class="container text-center">
            <p class="mb-2 text-white fw-bold">Ingin undangan digital seperti ini? Yuk, konsultasi dulu dengan kami!</p>
            <div class="d-flex gap-2 justify-content-center">
                <a href="https://wa.me/085645251595?text=Halo%20saya%20tertarik%20dengan%20undangan%20digital" target="_blank" class="btn btn-success btn-sm">
                    <i class="fa-brands fa-whatsapp me-1"></i> Pesan Sekarang
                </a>
                <a href="https://wa.me/085645251595?text=Halo,%20saya%20ingin%20tanya%20tentang%20undangan%20digital" target="_blank" class="btn btn-outline-light btn-sm">
                    <i class="fa-brands fa-whatsapp me-1"></i> Tanya Dulu
                </a>
            </div>
            <span id="tutupOverlay" class="position-absolute top-0 end-0 m-2 fs-5 text-white" style="cursor:pointer;">&times;</span>
        </div>
    `;

    // Tambahkan overlay ke dalam body
    document.body.appendChild(overlay);

    // Tambahkan CSS ke dalam <style>
    let style = document.createElement("style");
    style.innerHTML = `
        #overlayPromo {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.85);
            color: white;
            z-index: 9999;
        }
        
        @media (max-width: 576px) {
            #overlayPromo .d-flex {
                flex-direction: column;
                gap: 5px;
            }
        }
    `;
    document.head.appendChild(style);

    // Tambahkan event listener ke tombol tutup
    document.getElementById("tutupOverlay").addEventListener("click", function () {
        overlay.style.display = "none";
    });
});

// nama tamu berdasarkan url 
document.addEventListener("DOMContentLoaded", function () {
    // Ambil parameter "tamu" dari URL
    const params = new URLSearchParams(window.location.search);
    const namaTamu = params.get("to") || "Tamu Undangan";

    // Update elemen h4 dengan nama tamu
    document.getElementById("tamu").textContent = namaTamu;
});

// tombol buka
window.addEventListener("load", function () {
  // Tambahkan event listener pada tombol dengan ID #buka
  document.querySelector('#buka').addEventListener('click', () => {
    // Hapus kelas no-scroll dari body
    document.body.classList.remove('no-scroll');

    // Putar audio dengan penanganan error
    const audio = document.getElementById('audio');
    if (audio) {
      audio.play().catch(err => {
        console.error(`Gagal memutar audio: ${err.message}`);
      });
    }
  });
}); 
// Animations On Scroll
AOS.init({
	duration: 1000,
	delay: 300,
	easing: 'ease-out',
	once: true,
	mirror: false,
	offset: 120
});

/**
* Initiate Pure Counter
*/
new PureCounter();
  
// navigasi
let navmenulinks = document.querySelectorAll('.navmenu a');

function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;
    let position = window.scrollY + 200; // Atur offset sesuai kebutuhan
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      navmenulink.classList.add('active');
    } else {
      navmenulink.classList.remove('active');
    }
  });
}

// navigasi scroll spy
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);

//navigasi hapus # di URL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default (menambahkan # ke URL)

        const targetId = this.getAttribute('href').substring(1); // Ambil ID target tanpa #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Gulir ke elemen target
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            history.replaceState(null, null, ' ');
        }
    });
}); 
// tombol audio
document.addEventListener('DOMContentLoaded', () => {
  const audioButton = document.getElementById('audio-button');
  const audioIcon = document.getElementById('audio-icon');
  const backgroundAudio = document.getElementById('audio');

  // Fungsi untuk memperbarui ikon berdasarkan status audio
  const updateAudioIcon = () => {
    if (backgroundAudio.paused) {
      audioIcon.classList.replace('fa-volume-up', 'fa-volume-xmark');
    } else {
      audioIcon.classList.replace('fa-volume-xmark', 'fa-volume-up');
    }
  };

  // Event listener untuk tombol play/pause
  audioButton.addEventListener('click', () => {
    if (backgroundAudio.paused) {
      backgroundAudio.play();
    } else {
      backgroundAudio.pause();
    }
  });

  // Event listener untuk mendeteksi perubahan status audio
  backgroundAudio.addEventListener('play', updateAudioIcon);
  backgroundAudio.addEventListener('pause', updateAudioIcon);

  // Panggil sekali untuk sinkronisasi awal
  updateAudioIcon();
}); 

// tombol fullscreen
document.addEventListener('DOMContentLoaded', () => {
  const fullscreenButton = document.getElementById('fullscreen-button');
  const fullscreenIcon = document.getElementById('fullscreen-icon');

  // Fungsi untuk memperbarui ikon berdasarkan status fullscreen
  const updateFullscreenIcon = () => {
    if (document.fullscreenElement) {
      fullscreenIcon.classList.replace('fa-expand', 'fa-compress');
    } else {
      fullscreenIcon.classList.replace('fa-compress', 'fa-expand');
    }
  };

  // Event listener untuk tombol fullscreen
  fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      // Masuk ke mode fullscreen
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Gagal masuk ke fullscreen: ${err.message}`);
      });
    } else {
      // Keluar dari mode fullscreen
      document.exitFullscreen().catch((err) => {
        console.error(`Gagal keluar dari fullscreen: ${err.message}`);
      });
    }
  });

  // Event listener untuk mendeteksi perubahan status fullscreen
  document.addEventListener('fullscreenchange', updateFullscreenIcon);

  // Panggil sekali untuk sinkronisasi awal
  updateFullscreenIcon();
}); 
    	
// galeri
var grid = document.querySelector('.grid');
var msnry;

imagesLoaded( grid, function() {
// init Isotope after all images have loaded
  msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
 });
});
    
// copy button 
function copyContent(elementId, button) {
    const text = document.getElementById(elementId).innerText;
    
    navigator.clipboard.writeText(text).then(() => {
      // Mengubah teks tombol menjadi 'berhasil disalin'
      const originalText = button.innerHTML; // Simpan teks asli tombol
      button.innerHTML = 'berhasil disalin';
      
      // Mengembalikan tombol ke teks asli setelah 2 detik
      setTimeout(() => {
        button.innerHTML = originalText; // Kembalikan teks tombol ke teks semula
    }, 2000);
  }).catch(err => {
    console.error('Gagal menyalin: ', err);
  });
}
