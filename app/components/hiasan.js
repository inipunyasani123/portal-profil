// Hiasan portal "map berkas usaha": cap CONTOH, klip kertas, panah, kerangka halaman, dan tumpukan lembar.
// Semuanya komponen server, tanpa gambar raster: garis & isian SVG memakai warna tema (lihat kelas k-* di globals.css).

/** Cap karet "CONTOH". Kasar tepinya berasal dari filter #cap-kasar (lihat FilterCap). Dekoratif: disembunyikan dari pembaca layar. */
export function Cap({ teks = 'CONTOH', className = '' }) {
  return <span aria-hidden="true" className={`cap ${className}`}>{teks}</span>;
}

/** Definisi filter SVG untuk cap: satu kali di halaman. */
export function FilterCap() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: 'absolute' }}>
      <filter id="cap-kasar" x="-6%" y="-10%" width="112%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="bintik" />
        <feColorMatrix in="bintik" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  12 0 0 0 -3.5" result="tinta" />
        <feComposite in="SourceGraphic" in2="tinta" operator="in" result="kasar" />
        <feDisplacementMap in="kasar" in2="bintik" scale="1.1" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

/** Klip kertas: tiga lengkung bersarang. */
export function Klip({ className = '' }) {
  return (
    <svg viewBox="0 0 20 48" className={className} aria-hidden="true" focusable="false">
      <path d="M7 14v22a5 5 0 0 0 10 0V8a3.6 3.6 0 0 0-7.2 0v26a1.8 1.8 0 0 0 3.6 0V14" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Panah serong kanan-atas untuk tautan keluar. */
export function Panah({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 16 16" className={`${className} shrink-0`} aria-hidden="true" focusable="false">
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Bingkai({ children }) {
  return (
    <svg viewBox="0 0 200 112" className="kerangka" aria-hidden="true" focusable="false">
      <rect className="k-kertas" x="3" y="3" width="194" height="106" rx="3" />
      <path className="k-garis" d="M3 17h194" />
      <rect className="k-pekat" x="9" y="7" width="16" height="6" rx="1" />
      <path className="k-garis" d="M118 10h14M138 10h14M158 10h14M178 10h12" />
      {children}
    </svg>
  );
}

/** Denah sederhana tiap jenis halaman (bukan tangkapan layar): beranda, profil, layanan, kabar, kontak. */
export function Kerangka({ jenis }) {
  switch (jenis) {
    case 'beranda':
      return (
        <Bingkai>
          <rect className="k-pekat" x="12" y="27" width="84" height="8" />
          <rect className="k-pekat" x="12" y="39" width="64" height="8" />
          <rect className="k-teks" x="12" y="53" width="74" height="3" rx="1.5" />
          <rect className="k-teks" x="12" y="60" width="56" height="3" rx="1.5" />
          <rect className="k-pekat" x="12" y="70" width="32" height="10" rx="2" />
          <rect className="k-isi" x="108" y="25" width="82" height="58" rx="2" />
          <path className="k-garis" d="M108 83l32-31 18 18 12-10 20 23" />
          <circle className="k-kertas" cx="174" cy="38" r="5" />
          {[12, 73, 134].map((x) => <rect key={x} className="k-kertas" x={x} y="90" width="54" height="14" rx="2" />)}
        </Bingkai>
      );
    case 'profil':
      return (
        <Bingkai>
          <circle className="k-isi" cx="48" cy="58" r="25" />
          <circle className="k-kertas" cx="48" cy="50" r="8" />
          <path className="k-garis" d="M31 79c3-11 9-15 17-15s14 4 17 15" />
          <rect className="k-pekat" x="88" y="28" width="62" height="8" />
          <rect className="k-teks" x="88" y="44" width="100" height="3" rx="1.5" />
          <rect className="k-teks" x="88" y="52" width="92" height="3" rx="1.5" />
          <rect className="k-teks" x="88" y="60" width="100" height="3" rx="1.5" />
          <rect className="k-teks" x="88" y="68" width="64" height="3" rx="1.5" />
          <rect className="k-pekat" x="88" y="80" width="3" height="20" />
          <rect className="k-teks" x="97" y="82" width="76" height="3" rx="1.5" />
          <rect className="k-teks" x="97" y="90" width="58" height="3" rx="1.5" />
        </Bingkai>
      );
    case 'layanan':
      return (
        <Bingkai>
          {[10, 71, 132].map((x) => (
            <g key={x}>
              <rect className="k-kertas" x={x} y="24" width="58" height="80" rx="2" />
              <rect className="k-isi" x={x + 5} y="29" width="48" height="30" rx="1.5" />
              <rect className="k-pekat" x={x + 5} y="65" width="34" height="5" />
              <rect className="k-teks" x={x + 5} y="75" width="46" height="3" rx="1.5" />
              <rect className="k-teks" x={x + 5} y="82" width="36" height="3" rx="1.5" />
              <rect className="k-pekat" x={x + 5} y="92" width="24" height="7" rx="1.5" />
            </g>
          ))}
        </Bingkai>
      );
    case 'kabar':
      return (
        <Bingkai>
          {[24, 52, 80].map((y) => (
            <g key={y}>
              <rect className="k-isi" x="10" y={y} width="34" height="24" rx="2" />
              <rect className="k-pekat" x="52" y={y + 2} width="96" height="5" />
              <rect className="k-teks" x="52" y={y + 11} width="128" height="3" rx="1.5" />
              <rect className="k-teks" x="52" y={y + 18} width="40" height="3" rx="1.5" />
            </g>
          ))}
        </Bingkai>
      );
    default:
      return (
        <Bingkai>
          <rect className="k-kertas" x="10" y="26" width="84" height="12" rx="2" />
          <rect className="k-kertas" x="10" y="43" width="84" height="12" rx="2" />
          <rect className="k-kertas" x="10" y="60" width="84" height="24" rx="2" />
          <rect className="k-pekat" x="10" y="90" width="36" height="12" rx="2" />
          <rect className="k-isi" x="104" y="26" width="86" height="52" rx="2" />
          <path className="k-garis" d="M104 58l30-12 22 16 34-14M130 26l10 52" />
          <path className="k-pekat" d="M170 36a7 7 0 0 1 7 7c0 6-7 14-7 14s-7-8-7-14a7 7 0 0 1 7-7z" />
          <circle className="k-kertas" cx="170" cy="43" r="2.5" />
          <rect className="k-kertas" x="104" y="84" width="62" height="18" rx="7" />
          <rect className="k-teks" x="111" y="90" width="42" height="3" rx="1.5" />
        </Bingkai>
      );
  }
}

/** Tumpukan lembar: 1 untuk landing page, 5 untuk company profile. Lembar paling depan berisi garis teks. */
export function Lembar({ jumlah }) {
  return (
    <svg viewBox="0 0 132 114" className="lembar" aria-hidden="true" focusable="false">
      {Array.from({ length: jumlah }, (_, i) => {
        const x = 8 + i * 13;
        const y = 6 + i * 4.5;
        const depan = i === jumlah - 1;
        return (
          <g key={i}>
            <rect className="k-kertas" x={x} y={y} width="58" height="84" rx="2" />
            {depan && (
              <>
                <rect className="k-pekat" x={x + 7} y={y + 9} width="34" height="6" />
                <rect className="k-isi" x={x + 7} y={y + 21} width="44" height="22" rx="1.5" />
                <rect className="k-teks" x={x + 7} y={y + 51} width="44" height="3" rx="1.5" />
                <rect className="k-teks" x={x + 7} y={y + 59} width="38" height="3" rx="1.5" />
                <rect className="k-pekat" x={x + 7} y={y + 68} width="22" height="7" rx="1.5" />
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
