/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@main'] = path.join(__dirname, 'src/app/Main');
    config.resolve.alias['@research'] = path.join(__dirname, 'src/app/Research');
    return config;
  },
}

module.exports = nextConfig