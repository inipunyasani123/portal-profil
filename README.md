# PortalProfil: Map Berkas Usaha

Galeri demo company profile PintuWeb: kontraktor renovasi, perajin marmer, telur grosir, rental mobil, bengkel las, dan servis AC. Tiap demo punya 5 halaman isi dan satu halaman tambahan; portal ini menaut ke setiap halamannya dan menawarkan paket Standar UMKM.

**Alamat:** https://www.pintuweb.id/website-company-profile (asal `portal-profil.pintuweb.id`).

![Gambar pratinjau PortalProfil](public/og.jpg)

> Katalog demo milik PintuWeb. Semua usaha di demo fiktif.

## Konsep

Berkas usaha di atas meja kantor. Alas meja marun (satu-satunya warna dominan), tiap demo berupa map manila dengan lima tab halaman yang menaut ke situs demonya, potret ponsel beranda dijepit klip kertas, dan halaman tambahan terselip sebagai lampiran bergaris putus. Cap karet merah "CONTOH" menandai bahwa usahanya rekaan. Paket Standar UMKM ditulis sebagai surat penawaran di kertas folio bergaris dengan lubang ordner; garis kop tebal-tipis memisahkan tiap bagian. Isi lima halaman memakai tata letak bento dengan denah halaman gambar sendiri.

## Demo yang dipamerkan (6)

- [Bowplank](https://profil-kontraktor.pintuweb.id): kontraktor renovasi di Medan; gambar sebelum-sesudah, hitung kasar biaya
- [Urat Batu](https://profil-marmer.pintuweb.id): perajin marmer dan onyx di Tulungagung; penggaris ukuran, versi bahasa Inggris
- [Pagi Kuning](https://profil-telur.pintuweb.id): telur ayam grosir di Blitar; daftar harga dan penyusun pesanan
- [Sewu Roda](https://profil-rental.pintuweb.id): rental mobil dan bus di Yogyakarta; pencocok kendaraan, armada dan syarat
- [Gurat Baja](https://profil-las.pintuweb.id): bengkel las di Kediri; perancang kanopi
- [PK Pas](https://profil-ac.pintuweb.id): servis dan pasang AC di Makassar; pemilih PK

Data demo ada di `app/components/profil-data.js` (alamat, halaman, halaman tambahan). Jumlah demo di judul halaman dihitung dari data itu.

Potret ponsel tiap demo ada di `public/images/demo/<slug>.webp`, dipotret dari halaman live dengan `scripts/potret.mjs`. Potret **las** dan **ac** masih sementara (belum dari live); lihat `public/images/SUMBER.md`. Varian WebP-nya dibuat `node scripts/static-images.mjs . --base /website-company-profile`.

## Halaman

`/` (tayang sebagai `/website-company-profile` di domain utama lewat basePath + rewrite PintuWeb) dan 404 bergaya. Akar dan path lain di portal-profil.pintuweb.id dialihkan 308 ke https://www.pintuweb.id/website-company-profile. Tiap map punya `id` = slug (`kontraktor`, `marmer`, `telur`, `rental`, `las`, `ac`); `#slug` menggulir ke map dan menyorotnya sekitar 2 detik.

## Teknologi

- Next.js 15.5 (App Router) dan React 19, JavaScript
- Tailwind CSS v4
- Font (OFL, di `app/fonts`, diunduh dengan subset teks): Gloock (judul), Public Sans (teks), Courier Prime Bold (label mesin tik)
- SEO: metadata, Open Graph, JSON-LD CollectionPage + ItemList + BreadcrumbList + FAQPage

## Harga

Harga, waktu pengerjaan, nomor WhatsApp, dan tanggal berlaku tidak ditulis di kode. `scripts/ambil-harga.mjs` (jalan otomatis sebelum build lewat `prebuild`) mengambilnya dari https://www.pintuweb.id/harga.json ke `app/components/harga.json`; kalau gagal, salinan di repo dipakai. Isi paket Standar UMKM diringkas dari `PintuWeb/app/lib/packages.ts` di `app/components/pintuweb.js`; ubah di sana kalau isinya berubah.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000/website-company-profile. Untuk build produksi: `npm run build` lalu `npm start`.

---

Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website. Berlokasi di Tulungagung.
