document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mengonversi entitas HTML ke teks biasa
    function decodeHTMLEntities(text) {
        const textarea = document.createElement("textarea");
        textarea.innerHTML = text;
        return textarea.value;
    }

    // Fungsi untuk mengambil data JSON dengan default value
    function fetchData(url, callback, defaultData) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`File ${url} tidak ditemukan`);
                }
                return response.json();
            })
            .then(dataArray => {
                if (dataArray.length > 0) {
                    callback(dataArray[0]); // Gunakan data pertama dari array
                } else {
                    callback(defaultData); // Gunakan data default jika array kosong
                }
            })
            .catch(error => {
                console.error(`Error fetching ${url}:`, error);
                callback(defaultData); // Gunakan data default jika terjadi error
            });
    }

    // Data default untuk setiap file JSON
    const defaultUmum = {
        mempelai: "Naruto &amp; Hinata",
        inisialPria: "N",
        inisialWanita: "H",
        tanggal: 31,
        bulan: 01,
        tahun: 2026,
        kalender: "404.html"
    };

    const defaultPria = {
        nama: "Uzumaki Naruto",
        ayah: "Minato",
        ibu: "Kushina",
        akunIg: "naruto_id",
        linkIg: "404.html"
    };

    const defaultWanita = {
        nama: "Hyuga Hinata",
        ayah: "Hiashi",
        ibu: "Hyuga",
        akunIg: "hinata_id",
        linkIg: "404.html"
    };

    const defaultAkad = {
        hari: "Minggu",
        tanggal: 31,
        bulan: "Januari",
        tahun: 2026,
        jam: "08:00 WIB",
        lokasi: "Kediaman Mempelai Wanita",
        detailLokasi: "Jl. Melati No.01, Planet Neptunus",
        peta: "404.html"
    };

    const defaultResepsi = {
        hari: "Minggu",
        tanggal: 31,
        bulan: "Januari",
        tahun: 2026,
        jam: "10:00 WIB",
        lokasi: "Kediaman Mempelai Wanita",
        detailLokasi: "Jl. Melati No.01, Planet Neptunus",
        peta: "404.html"
    };

    const defaultCerita = {
        judul1: "Januari 2020",
        judul2: "Agustus 2020",
        judul3: "Maret 2022",
        judul4: "Januari 2025",
        cerita1: "Awal kami bertemu di sebuah kafe kecil, tanpa sengaja memesan minuman yang sama. Dari situ, cerita kami dimulai.",
        cerita2: "Kami mulai sering mengobrol, berbagi cerita, dan saling mengenal. Hari-hari terasa lebih hangat sejak saat itu.",
        cerita3: "Dia memberanikan diri mengungkapkan perasaannya. Aku tersenyum, karena ternyata aku pun merasakan hal yang sama.",
        cerita4: "Di awal tahun baru ini, kami memulai babak baru dalam hidup kami. Kami resmi menjadi pasangan suami istri."
    };

    const defaultGift = {
        bank1: "images/bank/bca.png",
        bank2: "images/bank/bri.png",
        norek1: "123456789099",
        norek2: "098765432199",
        atasNama1: "Uzumaki Naruto",
        atasNama2: "Hyuga Hinata",
        alamat: "Kantor Hokage, Konoha Gakure"
    };

    const defaultLive = {
        liveIg: "404.html",
        liveTt: "404.html"
    };

    // Fetch data umum.json
    fetchData('cpanel/data/umum.json', data => {
        document.getElementById("mempelai").textContent = decodeHTMLEntities(data.mempelai || defaultUmum.mempelai);
        document.getElementById("mempelai2").textContent = decodeHTMLEntities(data.mempelai || defaultUmum.mempelai);
        document.getElementById("mempelai3").textContent = decodeHTMLEntities(data.mempelai || defaultUmum.mempelai);
        document.getElementById("inisialPria").textContent = decodeHTMLEntities(data.inisialPria || defaultUmum.inisialPria);
        document.getElementById("inisialWanita").textContent = decodeHTMLEntities(data.inisialWanita || defaultUmum.inisialWanita);
        document.getElementById("tanggalIntro").textContent = decodeHTMLEntities(data.tanggal || defaultUmum.tanggal);
        document.getElementById("bulanIntro").textContent = decodeHTMLEntities(data.bulan || defaultUmum.bulan);
        document.getElementById("tahunIntro").textContent = decodeHTMLEntities(data.tahun || defaultUmum.tahun);
        document.getElementById("simpanTanggal").href = decodeHTMLEntities(data.kalender || defaultUmum.kalender);

        // Inisialisasi countdown
        simplyCountdown("#mycountdown", {
            year: data.tahun || defaultUmum.tahun,
            month: data.bulan || defaultUmum.bulan,
            day: data.tanggal || defaultUmum.tanggal,
        });
    }, defaultUmum);

    // Fetch data pria.json
    fetchData('cpanel/data/pria.json', data => {
        document.getElementById("mempelaiPria").textContent = decodeHTMLEntities(data.nama || defaultPria.nama);
        document.getElementById("ayahPria").textContent = decodeHTMLEntities(data.ayah || defaultPria.ayah);
        document.getElementById("ibuPria").textContent = decodeHTMLEntities(data.ibu || defaultPria.ibu);
        document.getElementById("igPria").textContent = decodeHTMLEntities(data.akunIg || defaultPria.akunIg);
        document.getElementById("linkIgPria").href = decodeHTMLEntities(data.linkIg || defaultPria.linkIg);
    }, defaultPria);

    // Fetch data wanita.json
    fetchData('cpanel/data/wanita.json', data => {
        document.getElementById("mempelaiWanita").textContent = decodeHTMLEntities(data.nama || defaultWanita.nama);
        document.getElementById("ayahWanita").textContent = decodeHTMLEntities(data.ayah || defaultWanita.ayah);
        document.getElementById("ibuWanita").textContent = decodeHTMLEntities(data.ibu || defaultWanita.ibu);
        document.getElementById("igWanita").textContent = decodeHTMLEntities(data.akunIg || defaultWanita.akunIg);
        document.getElementById("linkIgWanita").href = decodeHTMLEntities(data.linkIg || defaultWanita.linkIg);
    }, defaultWanita);

    // Fetch data akad.json
    fetchData('cpanel/data/akad.json', data => {
        document.getElementById("hariAkad").textContent = decodeHTMLEntities(data.hari || defaultAkad.hari);
        document.getElementById("tanggalAkad").dataset.purecounterEnd = decodeHTMLEntities(data.tanggal || defaultAkad.tanggal);
        document.getElementById("bulanAkad").textContent = decodeHTMLEntities(data.bulan || defaultAkad.bulan);
        document.getElementById("tahunAkad").textContent = decodeHTMLEntities(data.tahun || defaultAkad.tahun);
        document.getElementById("jamAkad").textContent = decodeHTMLEntities(data.jam || defaultAkad.jam);
        document.getElementById("lokasiAkad").textContent = decodeHTMLEntities(data.lokasi || defaultAkad.lokasi);
        document.getElementById("detailLokasiAkad").textContent = decodeHTMLEntities(data.detailLokasi || defaultAkad.detailLokasi);
        document.getElementById("linkAkad").href = decodeHTMLEntities(data.peta || defaultAkad.peta);
    }, defaultAkad);

    // Fetch data resepsi.json
    fetchData('cpanel/data/resepsi.json', data => {
        document.getElementById("hariResepsi").textContent = decodeHTMLEntities(data.hari || defaultResepsi.hari);
        document.getElementById("tanggalResepsi").dataset.purecounterEnd = decodeHTMLEntities(data.tanggal || defaultResepsi.tanggal);
        document.getElementById("bulanResepsi").textContent = decodeHTMLEntities(data.bulan || defaultResepsi.bulan);
        document.getElementById("tahunResepsi").textContent = decodeHTMLEntities(data.tahun || defaultResepsi.tahun);
        document.getElementById("jamResepsi").textContent = decodeHTMLEntities(data.jam || defaultResepsi.jam);
        document.getElementById("lokasiResepsi").textContent = decodeHTMLEntities(data.lokasi || defaultResepsi.lokasi);
        document.getElementById("detailLokasiResepsi").textContent = decodeHTMLEntities(data.detailLokasi || defaultResepsi.detailLokasi);
        document.getElementById("linkResepsi").href = decodeHTMLEntities(data.peta || defaultResepsi.peta);
    }, defaultResepsi);

    // Fetch data cerita.json
    fetchData('cpanel/data/cerita.json', data => {
        document.getElementById("judul1").textContent = decodeHTMLEntities(data.judul1 || defaultCerita.judul1);
        document.getElementById("judul2").textContent = decodeHTMLEntities(data.judul2 || defaultCerita.judul2);
        document.getElementById("judul3").textContent = decodeHTMLEntities(data.judul3 || defaultCerita.judul3);
        document.getElementById("judul4").textContent = decodeHTMLEntities(data.judul4 || defaultCerita.judul4);
        document.getElementById("cerita1").textContent = decodeHTMLEntities(data.cerita1 || defaultCerita.cerita1);
        document.getElementById("cerita2").textContent = decodeHTMLEntities(data.cerita2 || defaultCerita.cerita2);
        document.getElementById("cerita3").textContent = decodeHTMLEntities(data.cerita3 || defaultCerita.cerita3);
        document.getElementById("cerita4").textContent = decodeHTMLEntities(data.cerita4 || defaultCerita.cerita4);
    }, defaultCerita);

    // Fetch data gift.json
    fetchData('cpanel/data/gift.json', data => {
        document.getElementById("bank1name").src = decodeHTMLEntities(data.bank1 || defaultGift.bank1);
        document.getElementById("bank2name").src = decodeHTMLEntities(data.bank2 || defaultGift.bank2);
        document.getElementById("bankNo1").textContent = decodeHTMLEntities(data.norek1 || defaultGift.norek1);
        document.getElementById("bankNo2").textContent = decodeHTMLEntities(data.norek2 || defaultGift.norek2);
        document.getElementById("atasNama1").textContent = decodeHTMLEntities(data.atasNama1 || defaultGift.atasNama1);
        document.getElementById("atasNama2").textContent = decodeHTMLEntities(data.atasNama2 || defaultGift.atasNama2);
        document.getElementById("kado").textContent = decodeHTMLEntities(data.alamat || defaultGift.alamat);
    }, defaultGift);

    // Fetch data live.json
    fetchData('cpanel/data/live.json', data => {
        document.getElementById("liveIg").href = decodeHTMLEntities(data.liveIg || defaultLive.liveIg);
        document.getElementById("liveTt").href = decodeHTMLEntities(data.liveTt || defaultLive.liveTt);
    }, defaultLive);
});