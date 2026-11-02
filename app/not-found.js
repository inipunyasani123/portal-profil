import Link from 'next/link';
import { JUMLAH } from './components/profil-data';
import { Cap, FilterCap } from './components/hiasan';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main id="konten" className="meja flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <FilterCap />
      {/* map kosong dengan cap */}
      <div className="map terang w-full max-w-xs text-left" aria-hidden="true">
        <ul className="map-tab">
          <li><span className="tab tab-awal">Berkas</span></li>
          <li><span className="tab">404</span></li>
        </ul>
        <div className="map-badan relative min-h-40">
          <p className="label-mono">Map tidak ditemukan</p>
          <p className="mt-3 font-display text-7xl leading-none">404</p>
          <Cap teks="Kosong" className="absolute bottom-6 right-5" />
        </div>
      </div>
      <h1 className="judul-bagian mt-10">Map ini kosong</h1>
      <p className="mt-4 max-w-md text-lg">Halaman yang kamu cari tidak ada di lemari ini. {JUMLAH} map demo menunggu di halaman utama.</p>
      <Link href="/" className="tombol tombol-map mt-8">Kembali ke daftar map</Link>
    </main>
  );
}
