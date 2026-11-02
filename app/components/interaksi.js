'use client';
import { useEffect, useId, useRef, useState } from 'react';

/** Menu "Galeri lain": popover di bilah jejak. aria-expanded, Esc menutup dan mengembalikan fokus, klik di luar menutup. */
export function GaleriLain({ galeri, pintuweb }) {
  const [buka, setBuka] = useState(false);
  const wadah = useRef(null);
  const tombol = useRef(null);
  const idPanel = useId();

  useEffect(() => {
    if (!buka) return;
    const luar = (e) => { if (wadah.current && !wadah.current.contains(e.target)) setBuka(false); };
    const tuts = (e) => { if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); } };
    document.addEventListener('pointerdown', luar);
    document.addEventListener('keydown', tuts);
    return () => { document.removeEventListener('pointerdown', luar); document.removeEventListener('keydown', tuts); };
  }, [buka]);

  return (
    <div
      ref={wadah}
      className="relative ms-auto"
      onBlur={(e) => { if (buka && !e.currentTarget.contains(e.relatedTarget)) setBuka(false); }}
    >
      <button
        ref={tombol}
        type="button"
        aria-expanded={buka}
        aria-controls={idPanel}
        onClick={() => setBuka((b) => !b)}
        className="jejak-tombol"
      >
        Galeri lain
        <svg viewBox="0 0 12 12" className={`h-3 w-3 transition-transform ${buka ? 'rotate-180' : ''}`} aria-hidden="true" focusable="false">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div id={idPanel} hidden={!buka} className="panel-galeri terang">
        <p className="label-mono px-3 pb-1 pt-2">Galeri lain di PintuWeb</p>
        <ul>
          {galeri.map((g) => (
            <li key={g.path}>
              <a href={`${pintuweb}/${g.path}`} className="panel-galeri-tautan">{g.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Menyorot map demo ±2 detik (bingkai) saat halaman dibuka dengan #slug atau tautan #slug diklik. */
export function SorotTautan({ slugs }) {
  useEffect(() => {
    let t;
    const sorot = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!slugs.includes(id)) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ block: 'start' });
      document.querySelectorAll('[data-sorot]').forEach((n) => n.removeAttribute('data-sorot'));
      el.setAttribute('data-sorot', '');
      clearTimeout(t);
      t = setTimeout(() => el.removeAttribute('data-sorot'), 2000);
    };
    sorot();
    window.addEventListener('hashchange', sorot);
    return () => { window.removeEventListener('hashchange', sorot); clearTimeout(t); };
  }, [slugs]);
  return null;
}
