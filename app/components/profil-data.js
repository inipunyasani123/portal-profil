// Enam demo company profile PintuWeb. Semua usaha di dalamnya rekaan; alamat demo: https://profil-<slug>.pintuweb.id.
// Tiap demo punya 5 halaman isi (Beranda, Profil, Layanan atau Produk, Kabar, Kontak) dan 1 halaman tambahan.
// Potret ponsel beranda: public/images/demo/<slug>.webp (390×844, dipotret dari halaman live dengan scripts/potret.mjs).
// src gambar untuk next/image harus berawalan basePath karena loader statis mencari kuncinya di image-manifest.json.
const B = '/website-company-profile';

const LAYANAN = { path: '/layanan', label: 'Layanan' };
const PRODUK = { path: '/produk', label: 'Produk' };
const halaman = (tengah) => [
  { path: '/', label: 'Beranda' },
  { path: '/profil', label: 'Profil' },
  tengah,
  { path: '/kabar', label: 'Kabar' },
  { path: '/kontak', label: 'Kontak' },
];

export const demo = [
  {
    slug: 'kontraktor',
    nama: 'Bowplank',
    bidang: 'Kontraktor renovasi dan bangun rumah',
    kota: 'Medan',
    url: 'https://profil-kontraktor.pintuweb.id',
    tagline: 'Kontraktor Renovasi Rumah yang Mengukur Dulu',
    kartu: 'Situs profil kontraktor renovasi rumah di Medan: geser gambar sebelum-sesudah dan hitung kasar biaya renovasi ruanganmu.',
    halaman: halaman(LAYANAN),
    tambahan: { path: '/hitung-biaya', label: 'Hitung Kasar Biaya' },
    gambar: `${B}/images/demo/kontraktor.webp`,
  },
  {
    slug: 'marmer',
    nama: 'Urat Batu',
    bidang: 'Perajin marmer dan onyx',
    kota: 'Tulungagung',
    url: 'https://profil-marmer.pintuweb.id',
    tagline: 'Perajin Marmer dan Onyx dari Tulungagung',
    kartu: 'Bengkel marmer dan onyx di Tulungagung: bandingkan ukuran ubin, meja, dan vas pada satu penggaris, lalu susun pesan WhatsApp untuk minta sampel.',
    halaman: halaman(PRODUK),
    tambahan: { path: '/en', label: 'English (versi bahasa Inggris)' },
    gambar: `${B}/images/demo/marmer.webp`,
  },
  {
    slug: 'telur',
    nama: 'Pagi Kuning',
    bidang: 'Peternak dan agen telur ayam grosir',
    kota: 'Blitar',
    url: 'https://profil-telur.pintuweb.id',
    tagline: 'Telur Ayam Grosir untuk Warung, Toko Kue, dan Katering',
    kartu: 'Usaha telur ayam grosir di Blitar: lihat daftar harga contoh per ukuran, lalu susun pesananmu dan kirim lewat WhatsApp.',
    halaman: halaman(PRODUK),
    tambahan: { path: '/harga', label: 'Daftar Harga' },
    gambar: `${B}/images/demo/telur.webp`,
  },
  {
    slug: 'rental',
    nama: 'Sewu Roda',
    bidang: 'Rental mobil dan bus pariwisata',
    kota: 'Yogyakarta',
    url: 'https://profil-rental.pintuweb.id',
    tagline: 'Rental Mobil dan Bus untuk Keliling Yogyakarta',
    kartu: 'Rental mobil dan bus di Yogyakarta: isi jumlah penumpang untuk melihat kendaraan yang muat, lalu susun pesan sewa ke WhatsApp.',
    halaman: halaman(LAYANAN),
    tambahan: { path: '/armada', label: 'Armada & Syarat' },
    gambar: `${B}/images/demo/rental.webp`,
  },
  {
    slug: 'las',
    nama: 'Gurat Baja',
    bidang: 'Bengkel las kanopi, pagar, tangga, dan teralis',
    kota: 'Kediri',
    url: 'https://profil-las.pintuweb.id',
    tagline: 'Kanopi dan Pagar Besi yang Digambar Sebelum Dilas',
    kartu: 'Bengkel las di Kediri untuk kanopi, pagar, tangga, dan teralis: rancang kanopimu sendiri di layar dan lihat perkiraan biaya contohnya.',
    halaman: halaman(LAYANAN),
    tambahan: { path: '/rancang-kanopi', label: 'Rancang Kanopi' },
    // SEMENTARA (390×844, 1×): demo ini belum tayang saat portal dibangun. Ambil ulang dari live (dpr 2) lalu jalankan static-images.
    gambar: `${B}/images/demo/las.webp`,
  },
  {
    slug: 'ac',
    nama: 'PK Pas',
    bidang: 'Servis dan pasang AC',
    kota: 'Makassar',
    url: 'https://profil-ac.pintuweb.id',
    tagline: 'Servis dan Pasang AC dengan PK yang Pas',
    kartu: 'Usaha servis dan pasang AC di Makassar: hitung PK yang pas untuk ruanganmu, lalu kirim ringkasannya lewat WhatsApp.',
    halaman: halaman(LAYANAN),
    tambahan: { path: '/pilih-pk', label: 'Pilih PK' },
    // SEMENTARA (390×844, 1×): sama seperti las.
    gambar: `${B}/images/demo/ac.webp`,
  },
];

export const JUMLAH = demo.length;

/** Alamat halaman di situs demo: path "/" jadi alamat akar. */
export const alamat = (d, path) => `${d.url}${path}`;
