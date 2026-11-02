import Image from 'next/image';
import { demo, JUMLAH, alamat } from './components/profil-data';
import { Cap, FilterCap, Klip, Panah, Kerangka, Lembar } from './components/hiasan';
import { GaleriLain, SorotTautan } from './components/interaksi';
import {
  PINTUWEB, PAKET, TAMBAHAN, HARGA_PER, WA_DISPLAY, JAM_KERJA, LANJUT, BACA, GALERI_LAIN,
  URL_CUSTOM, URL_ARTIKEL_BEDA, wa,
} from './components/pintuweb';

const WA_HERO = wa('Halo PintuWeb, saya tertarik website company profile untuk usaha saya. Boleh minta info?');
const WA_PAKET = wa(`Halo PintuWeb, saya tertarik website company profile (paket ${PAKET.nama}). Boleh minta info?`);
const SLUGS = demo.map((d) => d.slug);

/** Empat cetakan di hero: posisi x (% lebar), geser naik y (px), putaran r (derajat). Hanya demo yang sudah tayang. */
const KIPAS = [
  { slug: 'kontraktor', x: 3, y: 20, r: -6 },
  { slug: 'marmer', x: 22, y: 4, r: -2.5 },
  { slug: 'telur', x: 41, y: 12, r: 2 },
  { slug: 'rental', x: 60, y: 28, r: 5 },
].map((k) => ({ ...k, d: demo.find((d) => d.slug === k.slug) }));

/** Lima halaman isi (jenis = denah di hiasan.js). Satu kalimat tiap halaman. */
const ISI = [
  { jenis: 'beranda', judul: 'Beranda', teks: 'Halaman pertama: tamu langsung tahu usahamu bergerak di bidang apa.', kelas: 'sm:col-span-2 lg:col-span-3' },
  { jenis: 'profil', judul: 'Profil', teks: 'Cerita usahamu: siapa kamu, sejak kapan berdiri, dan cara kerjamu.', kelas: 'lg:col-span-3' },
  { jenis: 'layanan', judul: 'Layanan atau Produk', teks: 'Daftar yang kamu tawarkan, supaya tamu tidak perlu bertanya satu per satu.', kelas: 'lg:col-span-2' },
  { jenis: 'kabar', judul: 'Kabar', teks: 'Tulisan singkat berisi kabar usaha atau tips untuk pelangganmu.', kelas: 'lg:col-span-2' },
  { jenis: 'kontak', judul: 'Kontak', teks: 'Formulir, tombol WhatsApp, dan peta, supaya tamu mudah menghubungimu.', kelas: 'lg:col-span-2' },
];

/** Tanya jawab: angka & tanggal dari harga.json, fakta lain dari PintuWeb/app/content/faq.ts dan lib/packages.ts. */
const TANYA = [
  {
    q: 'Berapa lama pengerjaannya?',
    a: `Paket ${PAKET.nama} dikerjakan dalam ${PAKET.waktu} setelah isinya lengkap. Bisa lebih cepat atau lebih lama, tergantung kelengkapan isi dan fitur.`,
  },
  {
    q: 'Apa yang perlu saya siapkan?',
    a: 'Yang wajib: nama usaha, deskripsi singkat, dan kontak. Logo, foto produk, dan contoh website yang kamu suka akan membantu, dan kalau belum lengkap, kami bantu.',
  },
  {
    q: 'Bisakah saya mengganti isinya sendiri?',
    a: 'Kirim perubahannya lewat WhatsApp; update kecil seperti teks, gambar, atau kontak gratis selama masa perawatan. Kalau mau mengubah sendiri, sampaikan saat konsultasi karena panel pengelola isi bisa ditambahkan.',
  },
  {
    q: 'Apakah domain dan hosting sudah termasuk?',
    a: 'Ya, domain .com, hosting, dan SSL sudah termasuk untuk tahun pertama. Setelah itu perlu diperpanjang supaya website tetap tayang.',
  },
  {
    q: 'Bisakah menambah halaman?',
    a: `Bisa. Halaman tambahan ${TAMBAHAN.mulai} – ${TAMBAHAN.sampai} ${TAMBAHAN.satuan}, dan fitur yang lebih besar kami bicarakan dulu.`,
  },
  {
    q: 'Apakah usaha di demo itu sungguhan?',
    a: 'Bukan. Semua usaha di demo ini rekaan, jadi nama, alamat, dan harganya hanya contoh.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ sub = 'Company Profile', gelap = false }) {
  return (
    <>
      <span className={gelap ? 'logo-plat' : 'grid place-items-center'} aria-hidden="true">
        <Image src="/website-company-profile/images/logo-pintuweb.png" alt="" width={22} height={30} className="h-[30px] w-auto" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.3rem]">PintuWeb</span>
        <span className={`label-mono mt-1 ${gelap ? 'text-map' : 'text-tinta-2'}`}>{sub}</span>
      </span>
    </>
  );
}

/** Satu map manila: lima tab halaman di atas, potret beranda dijepit klip, keterangan, dan lampiran halaman tambahan. */
function KartuMap({ d, no }) {
  return (
    <article id={d.slug} className="map terang" aria-labelledby={`nama-${d.slug}`}>
      <nav aria-label={`Halaman demo ${d.nama}`}>
        <ul className="map-tab">
          {d.halaman.map((h, i) => (
            <li key={h.path}>
              <a href={alamat(d, h.path)} target="_blank" rel="noopener noreferrer" className={`tab${i === 0 ? ' tab-awal' : ''}`}>
                {h.label}<span className="sr-only"> {d.nama}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="map-badan">
        <div className="map-grid">
          <figure className="cetak" style={{ '--miring': no % 2 ? '-2deg' : '1.8deg' }}>
            <Klip className="klip" />
            <div className="cetak-layar">
              <Image src={d.gambar} alt={`Tampilan beranda demo ${d.nama} di ponsel`} fill sizes="(min-width: 640px) 176px, 140px" />
            </div>
            <Cap className="cap-cetak" />
          </figure>
          <div className="min-w-0">
            <p className="label-mono">Map {no} dari {JUMLAH}</p>
            <h3 id={`nama-${d.slug}`} className="mt-2 text-[1.75rem] leading-none sm:text-[2.15rem]">{d.nama}</h3>
            <p className="bidang">{d.bidang} · {d.kota}</p>
            <p className="kartu-teks">{d.kartu}</p>
            <a href={d.url} target="_blank" rel="noopener noreferrer" className="tombol tombol-marun mt-4 whitespace-nowrap">
              Buka demo<span className="sr-only"> {d.nama}</span> <Panah />
            </a>
          </div>
        </div>
        <a href={alamat(d, d.tambahan.path)} target="_blank" rel="noopener noreferrer" className="lampiran">
          <span className="min-w-0">
            <span className="label-mono block">Halaman tambahan</span>
            <span className="lampiran-nama">{d.tambahan.label}<span className="sr-only">, {d.nama}</span></span>
          </span>
          <Panah className="h-5 w-5" />
        </a>
      </div>
    </article>
  );
}

export default function PortalProfil() {
  return (
    <div id="atas" className="min-h-screen overflow-x-clip">
      <FilterCap />
      <a href="#konten" className="lewati">Lewati ke konten</a>

      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="jejak">
        <ol className="wadah flex items-center gap-2 py-1">
          <li><a href={PINTUWEB}>PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Company Profile</li>
          <li className="ms-auto list-none"><GaleriLain galeri={GALERI_LAIN} pintuweb={PINTUWEB} /></li>
        </ol>
      </nav>

      <header className="kepala-situs terang">
        <div className="wadah flex items-center justify-between gap-3 py-2">
          <a href="#atas" className="flex shrink-0 items-center gap-2.5 rounded-md">
            <Logo />
            <span className="sr-only">, ke atas halaman</span>
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 lg:flex">
            <a href="#demo" className="nav-tautan">{JUMLAH} demo</a>
            <a href="#isi" className="nav-tautan">Isi 5 halaman</a>
            <a href="#paket" className="nav-tautan">Paket & harga</a>
            <a href="#tanya" className="nav-tautan">Tanya jawab</a>
          </nav>
          <a href={WA_HERO} target="_blank" rel="noopener noreferrer" className="tombol tombol-marun min-h-10 shrink-0 px-4 text-sm">
            <span><span className="max-sm:sr-only">Tanya lewat </span>WhatsApp</span>
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero: judul, dua kalimat, dan cetakan layar demo yang berserakan di meja */}
        <section id="hero" aria-labelledby="judul-utama" className="meja relative overflow-x-clip">
          <div className="wadah grid gap-14 pb-16 pt-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-center md:gap-10 md:pb-24 md:pt-16">
            <div>
              <h1 id="judul-utama" className="judul-besar">Website company profile</h1>
              <div className="kop-garis my-6 w-28 text-map" aria-hidden="true" />
              <p className="max-w-xl text-[1.1875rem] leading-relaxed">
                Website company profile adalah website beberapa halaman yang memperkenalkan usahamu. Buka {JUMLAH} contoh yang sudah jadi, lalu pilih yang paling mirip dengan usahamu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#demo" className="tombol tombol-map">Lihat {JUMLAH} demo</a>
                <a href={WA_HERO} target="_blank" rel="noopener noreferrer" className="tombol tombol-krem">Tanya lewat WhatsApp</a>
              </div>
            </div>
            <div className="kipas" aria-hidden="true">
              {KIPAS.map((k, i) => (
                <figure key={k.slug} className="cetak kipas-item" style={{ '--x': `${k.x}%`, '--y': `${k.y}px`, '--r': `${k.r}deg` }}>
                  <div className="cetak-layar">
                    <Image src={k.d.gambar} alt="" fill sizes="(min-width: 768px) 200px, 140px" priority={i < 2} />
                  </div>
                </figure>
              ))}
              <Cap className="kipas-cap" />
            </div>
          </div>
        </section>

        {/* Daftar demo: satu map per demo */}
        <section id="demo" aria-labelledby="judul-demo" className="meja bagian bagian-garis">
          <div className="wadah">
            <div className="max-w-2xl">
              <h2 id="judul-demo" className="judul-bagian">{JUMLAH} contoh yang sudah jadi</h2>
              <p className="mt-4 text-lg leading-relaxed">
                Tiap map berisi satu usaha rekaan lengkap dengan 5 halaman isinya. Tekan nama halaman di atas map untuk membukanya langsung; semuanya terbuka di tab baru.
              </p>
            </div>
            <ul className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-2">
              {demo.map((d, i) => (
                <li key={d.slug} className="lg:even:mt-16">
                  <KartuMap d={d} no={i + 1} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Isi 5 halaman + halaman tambahan, tata letak bento */}
        <section id="isi" aria-labelledby="judul-isi" className="meja bagian bagian-garis">
          <div className="wadah">
            <div className="max-w-2xl">
              <h2 id="judul-isi" className="judul-bagian">Isi 5 halaman</h2>
              <p className="mt-4 text-lg leading-relaxed">Semua demo di atas punya lima halaman yang sama. Isi dan tampilannya disesuaikan dengan usahamu.</p>
            </div>
            <ul className="mt-16 grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
              {ISI.map((s, i) => (
                <li key={s.jenis} className={s.kelas}>
                  <div className="indeks terang">
                    <span className="indeks-tab label-mono">Halaman {i + 1}</span>
                    <h3 className="text-[1.75rem]">{s.judul}</h3>
                    <p className="mt-2 leading-relaxed">{s.teks}</p>
                    <Kerangka jenis={s.jenis} />
                  </div>
                </li>
              ))}
              <li className="sm:col-span-2 lg:col-span-4">
                <div className="indeks terang">
                  <span className="indeks-tab label-mono">Lampiran</span>
                  <h3 className="text-[1.75rem]">Halaman tambahan</h3>
                  <p className="mt-2 leading-relaxed">Perlu lebih dari 5 halaman? Tambah sesuai kebutuhan, misalnya alat hitung, daftar harga, atau versi bahasa Inggris. Ini contoh dari keenam demo:</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {demo.map((d) => (
                      <li key={d.slug} className="slip"><b>{d.tambahan.label}</b><span>{d.nama}</span></li>
                    ))}
                  </ul>
                  <p className="mt-6 font-display text-[1.6rem] leading-tight text-meja">
                    <span className="whitespace-nowrap">{TAMBAHAN.mulai}</span> <span className="font-sans text-xl font-semibold text-tinta-2">–</span> <span className="whitespace-nowrap">{TAMBAHAN.sampai}</span> <span className="font-sans text-base text-tinta-2">{TAMBAHAN.satuan}</span>
                  </p>
                  <p className="mt-1 text-sm text-tinta-2">Harga berlaku per {HARGA_PER}. Fitur yang lebih besar kami bicarakan dulu.</p>
                </div>
              </li>
              <li className="sm:col-span-2 lg:col-span-2">
                <div className="indeks indeks-gelap justify-center">
                  <h3 className="text-[1.6rem]">Butuh sistem kerja, bukan hanya profil?</h3>
                  <a href={URL_CUSTOM} className="tombol tombol-map mt-5 self-start">Lihat Website Custom <Panah /></a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Paket Standar UMKM: surat penawaran di kertas folio */}
        <section id="paket" aria-labelledby="judul-paket" className="meja bagian bagian-garis">
          <div className="wadah">
            <div className="max-w-2xl">
              <h2 id="judul-paket" className="judul-bagian">Paket {PAKET.nama}</h2>
              <p className="mt-4 text-lg leading-relaxed">{PAKET.subjudul}. Cocok untuk usaha yang ingin dikenal dan mudah dihubungi.</p>
            </div>
            <article className="folio terang mx-auto mt-12 max-w-5xl" aria-label={`Penawaran paket ${PAKET.nama}`}>
              <div className="grid gap-x-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
                <div>
                  <div className="flex h-14 items-center gap-2.5"><Logo sub="Jasa pembuatan website" /></div>
                  <div className="flex h-7 items-center"><div className="kop-garis w-full text-meja" aria-hidden="true" /></div>
                  <dl className="surat-data">
                    <div><dt>Perihal</dt><dd>Penawaran website company profile</dd></div>
                    <div>
                      <dt>Harga</dt>
                      <dd className="harga-besar"><span>{PAKET.mulai}</span><span><span className="sampai">sampai</span> {PAKET.sampai}</span></dd>
                    </div>
                    <div><dt>Pengerjaan</dt><dd>{PAKET.waktu}</dd></div>
                  </dl>
                  <p className="text-sm font-semibold text-tinta-2">Harga berlaku per {HARGA_PER}.</p>
                  <div className="flex h-14 items-center"><a href={WA_PAKET} target="_blank" rel="noopener noreferrer" className="tombol tombol-marun">Tanya paket lewat WhatsApp</a></div>
                </div>
                <div className="mt-7 lg:mt-0">
                  <p className="label-mono text-tinta-2">Isi paket</p>
                  <ol className="daftar-paket">
                    {PAKET.fitur.map((f) => <li key={f}>{f}</li>)}
                  </ol>
                  <div className="h-7" aria-hidden="true" />
                  <p>Hormat kami,</p>
                  <p className="font-display text-[1.6rem] text-meja">PintuWeb</p>
                  <p className="text-sm text-tinta-2">Berlokasi di Tulungagung, Jawa Timur</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Landing page atau company profile */}
        <section id="pilih" aria-labelledby="judul-pilih" className="meja bagian bagian-garis">
          <div className="wadah">
            <h2 id="judul-pilih" className="judul-bagian max-w-2xl">Landing page atau company profile?</h2>
            <div className="mt-14 grid items-stretch gap-x-5 gap-y-14 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
              <div className="indeks terang">
                <span className="indeks-tab label-mono">1 halaman</span>
                <Lembar jumlah={1} />
                <h3 className="mt-3 text-[1.75rem]">Landing page</h3>
                <p className="mt-2 leading-relaxed">Satu halaman untuk satu tujuan, seperti promo atau pendaftaran.</p>
              </div>
              <p className="self-center text-center font-display text-3xl text-map" aria-hidden="true">atau</p>
              <div className="indeks terang">
                <span className="indeks-tab label-mono">Beberapa halaman</span>
                <Lembar jumlah={5} />
                <h3 className="mt-3 text-[1.75rem]">Company profile</h3>
                <p className="mt-2 leading-relaxed">Beberapa halaman yang memperkenalkan usahamu secara lengkap.</p>
              </div>
            </div>
            <p className="mt-9">
              <a href={URL_ARTIKEL_BEDA} className="tombol tombol-krem">Baca perbedaannya di artikel PintuWeb <Panah /></a>
            </p>
          </div>
        </section>

        {/* Tanya jawab */}
        <section id="tanya" aria-labelledby="judul-tanya" className="meja bagian bagian-garis">
          <div className="wadah">
            <h2 id="judul-tanya" className="judul-bagian max-w-2xl">Tanya jawab</h2>
            <ul className="mt-12 grid gap-4 md:grid-cols-2">
              {TANYA.map((t) => (
                <li key={t.q} className="tanya terang">
                  <h3 className="tanya-q"><span className="tanda" aria-hidden="true">T</span>{t.q}</h3>
                  <p className="tanya-a"><span className="tanda" aria-hidden="true">J</span>{t.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ajakan akhir: kartu nama PintuWeb */}
        <section id="hubungi" aria-labelledby="judul-hubungi" className="meja bagian bagian-garis">
          <div className="wadah grid items-center gap-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div>
              <h2 id="judul-hubungi" className="judul-bagian">Mau punya website company profile sendiri?</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed">Ceritakan usahamu lewat WhatsApp, lalu kami kabari paket yang cocok. Kami membalas pada jam kerja: <span className="whitespace-nowrap">{JAM_KERJA}</span>.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WA_PAKET} target="_blank" rel="noopener noreferrer" className="tombol tombol-map">Chat WhatsApp PintuWeb</a>
                <a href="#demo" className="tombol tombol-krem">Lihat demo lagi</a>
              </div>
            </div>
            <div className="kartu-nama terang justify-self-center">
              <div className="flex items-center gap-2.5"><Logo sub="Jasa pembuatan website" /></div>
              <div className="kop-garis mt-3 text-meja" aria-hidden="true" />
              <p className="mt-4 text-sm text-tinta-2">WhatsApp</p>
              <p className="font-display text-[1.7rem] leading-tight text-meja"><span className="whitespace-nowrap">{WA_DISPLAY}</span></p>
              <p className="mt-3 text-sm">{JAM_KERJA}</p>
              <p className="text-sm text-tinta-2">Berlokasi di Tulungagung, Jawa Timur</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="kaki pt-12 max-md:pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:pb-8">
        <div className="wadah grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <p className="flex items-center gap-2.5 text-krem"><Logo gelap /></p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{JUMLAH} demo company profile yang bisa kamu coba. Semua usaha di dalamnya rekaan.</p>
          </div>
          <nav aria-labelledby="kaki-lanjut" className="text-sm">
            <p id="kaki-lanjut" className="label-kaki">Lanjut di PintuWeb</p>
            <ul className="mt-3 space-y-1">
              {LANJUT.map((l) => (
                <li key={l.href}><a href={l.href} className="kaki-tautan">{l.label}</a></li>
              ))}
              <li><a href={WA_HERO} target="_blank" rel="noopener noreferrer" className="kaki-tautan">WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span></a></li>
            </ul>
            <p id="kaki-baca" className="label-kaki mt-6">Baca juga</p>
            <ul aria-labelledby="kaki-baca" className="mt-3 space-y-1">
              {BACA.map((l) => (
                <li key={l.href}><a href={l.href} className="kaki-tautan">{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="kaki-galeri" className="text-sm">
            <p id="kaki-galeri" className="label-kaki">Galeri lain</p>
            <ul className="mt-3 space-y-1">
              {GALERI_LAIN.map((g) => (
                <li key={g.path}><a href={`${PINTUWEB}/${g.path}`} className="kaki-tautan">{g.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="wadah mt-12 border-t border-meja-2 pt-4 text-xs">© 2026 PintuWeb. Semua usaha di demo ini fiktif. Berlokasi di Tulungagung.</p>
      </footer>
      <SorotTautan slugs={SLUGS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </div>
  );
}
