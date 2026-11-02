import './globals.css';
import localFont from 'next/font/local';
import { demo, JUMLAH } from './components/profil-data';
import { URL_PORTAL, PINTUWEB } from './components/pintuweb';

// Tiga font OFL (lisensi di app/fonts), diunduh dari Google Fonts dengan parameter text= berisi ASCII cetak + – — · × ° ‘ ’ “ ” … é É ² ½
// supaya ringan: Gloock (judul, 14 KB), Public Sans variabel (teks, 19 KB), dan Courier Prime Bold (label mesin tik, 8 KB).
// Kalau teks memakai huruf di luar daftar itu, unduh ulang dengan text= yang ditambah.
const gloock = localFont({ src: './fonts/gloock.woff2', weight: '400', variable: '--font-gloock', display: 'swap', adjustFontFallback: 'Times New Roman' });
const publicSans = localFont({ src: './fonts/public-sans.woff2', weight: '400 800', variable: '--font-public', display: 'swap', adjustFontFallback: 'Arial' });
const courier = localFont({ src: './fonts/courier-prime-700.woff2', weight: '700', variable: '--font-courier', display: 'swap', adjustFontFallback: false });

// Merek di hasil pencarian & pratinjau tautan = PintuWeb. Jumlah demo dihitung dari data, bukan ditulis tangan.
const TITLE = `Contoh Website Company Profile: ${JUMLAH} Demo Siap Coba | PintuWeb`;
const DESCRIPTION = `${JUMLAH} contoh website company profile yang sudah jadi: kontraktor, marmer, telur, rental, bengkel las, dan servis AC. Coba, lalu pilih paket Standar UMKM.`;

// CollectionPage + daftar demonya (ItemList) + jejak. Data dari profil-data, jadi ikut bertambah sendiri.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: URL_PORTAL,
  inLanguage: 'id-ID',
  isPartOf: { '@type': 'WebSite', name: 'PintuWeb', url: PINTUWEB },
  publisher: { '@type': 'Organization', name: 'PintuWeb', url: PINTUWEB },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: demo.length,
    itemListElement: demo.map((d, i) => ({ '@type': 'ListItem', position: i + 1, name: `${d.nama}: ${d.bidang}, ${d.kota}`, url: d.url })),
  },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'PintuWeb', item: PINTUWEB }, { '@type': 'ListItem', position: 2, name: 'Company Profile', item: URL_PORTAL }] },
};

export const metadata = {
  metadataBase: new URL(URL_PORTAL),
  title: { default: TITLE, template: '%s | PintuWeb' },
  description: DESCRIPTION,
  applicationName: 'PintuWeb',
  keywords: ['contoh website company profile', 'demo company profile', 'jasa pembuatan company profile', 'website profil usaha', 'company profile UMKM'],
  authors: [{ name: 'PintuWeb', url: PINTUWEB }],
  creator: 'PintuWeb',
  publisher: 'PintuWeb',
  alternates: { canonical: URL_PORTAL },
  openGraph: { type: 'website', locale: 'id_ID', url: URL_PORTAL, siteName: 'PintuWeb', title: TITLE, description: DESCRIPTION, images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Cetakan layar ponsel empat demo company profile di atas meja marun dengan cap CONTOH' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export const viewport = { themeColor: '#4a1722', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${gloock.variable} ${publicSans.variable} ${courier.variable}`}>
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
