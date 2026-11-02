/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/website-company-profile: PintuWeb meneruskan path /website-company-profile
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/website-company-profile',
  // Gambar statis tanpa Image Optimization Vercel: varian WebP di public/_img lewat image-loader.js
  // (dibuat scripts/static-images.mjs . --base /website-company-profile).
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [
      { source: '/_img/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    ];
  },
  async redirects() {
    // Alamat portal-profil.pintuweb.id di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/website-company-profile', basePath: false, permanent: true },
      { source: '/:lama((?!website-company-profile(?:/|$)).+)', destination: 'https://www.pintuweb.id/website-company-profile', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
