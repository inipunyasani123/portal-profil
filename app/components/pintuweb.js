import HARGA from './harga.json';
// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /website-company-profile) di domain yang sama,
// jadi semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
/** Harga & kontak dibaca dari ./harga.json (salinan https://www.pintuweb.id/harga.json, diambil scripts/ambil-harga.mjs saat build). */
const P = (slug) => HARGA.paket[slug];
export const rp = (n) => `Rp${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
const tanggal = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'][m - 1]} ${y}`; };

export const PINTUWEB = 'https://www.pintuweb.id';
export const URL_PORTAL = `${PINTUWEB}/website-company-profile`;

/** Kontak & jam kerja dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY, HOURS). Ganti di sana = ganti di sini. */
export const WA_NUMBER = HARGA.wa.nomor;
export const WA_DISPLAY = HARGA.wa.tampil;
export const JAM_KERJA = 'Senin – Sabtu, 08.00 – 19.00 WIB';
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/** Tanggal berlaku harga = PRICES_UPDATED di PintuWeb/app/lib/packages.ts. */
export const HARGA_PER = tanggal(HARGA.diperbarui);

/**
 * Paket Standar UMKM dari PintuWeb/app/lib/packages.ts (slug standar-umkm: minPrice/maxPrice, time, subtitle, features).
 * Angka & waktu dari harga.json; isi paket diringkas setia dari `features` di sana (istilah teknis dijelaskan dengan kata awam).
 */
const STD = P('standar-umkm');
export const PAKET = {
  slug: 'standar-umkm',
  nama: STD.nama,
  subjudul: 'Website 3–5 halaman untuk usahamu',
  mulai: rp(STD.mulai),
  sampai: rp(STD.sampai) + (STD.lebih ? '+' : ''),
  waktu: STD.waktu,
  fitur: [
    '3–5 halaman lengkap: Beranda, Profil, Layanan, Kabar, dan Kontak',
    'Desain rapi, enak dibuka di HP',
    'Domain .com, hosting, dan SSL (gembok keamanan di alamat website)',
    'Formulir kontak, tombol WhatsApp, dan Google Maps',
    'Teks dasar dan pengaturan dasar supaya mudah ditemukan di Google',
    '2× revisi desain',
    'Perawatan dan keamanan 1–3 bulan',
  ],
};

/** Halaman tambahan: harga per halaman dari harga.json (tambahan.halaman). */
const TB = HARGA.tambahan.halaman;
export const TAMBAHAN = { nama: TB.nama, mulai: rp(TB.mulai), sampai: rp(TB.sampai), satuan: TB.satuan };

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'website-company-profile', label: 'Company Profile' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Konsep Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Portofolio Pribadi' },
  { path: 'website-reservasi', label: 'Reservasi & Booking' },
  { path: 'website-properti', label: 'Properti' },
  { path: 'aplikasi-to-do', label: 'To-Do & Produktivitas' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'website-company-profile');

/** Paket harga (lib/packages.ts: standar-umkm), halaman layanan, dan galeri demo PintuWeb. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#standar-umkm`, label: 'Harga paket Standar UMKM' },
  { href: `${PINTUWEB}/services/company-profile`, label: 'Jasa pembuatan company profile' },
  { href: `${PINTUWEB}/demo#profil`, label: 'Semua demo PintuWeb' },
];

/** Artikel PintuWeb yang relevan, di bawah "Baca juga". */
export const BACA = [
  { href: `${PINTUWEB}/artikel/landing-page-vs-company-profile`, label: 'Landing page vs company profile' },
  { href: `${PINTUWEB}/artikel/cara-membuat-website-umkm`, label: 'Cara membuat website UMKM' },
  { href: `${PINTUWEB}/artikel/domain-dan-hosting-untuk-pemula`, label: 'Domain dan hosting untuk pemula' },
];

/** Halaman layanan untuk kebutuhan yang lebih besar dari profil (sistem kerja, fitur khusus). */
export const URL_CUSTOM = `${PINTUWEB}/services/website-custom`;
export const URL_ARTIKEL_BEDA = `${PINTUWEB}/artikel/landing-page-vs-company-profile`;
