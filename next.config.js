const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withSvgr = require('@svgr/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  excludeFile: (str) => /\*.{spec,test}.tsx/.test(str),
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: true,
  },
  eslint: {
    dirs: ['pages', 'components', 'hooks'],
  },
  images: {
    disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = withPlugins([[optimizedImages], [withSvgr]], nextConfig)
