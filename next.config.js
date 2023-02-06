/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false };

  //   return config;
  // },
  i18n : {
    locales : ['fr', 'en'],
    defaultLocale: 'fr'
  },
  outputFileTracing: true,
  localePath: path.resolve('./public/src/locale')
}

module.exports = nextConfig
