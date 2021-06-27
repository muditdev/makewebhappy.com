module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['www.notion.so', 'i.scdn.co'],
  },
  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/generate-sitemap') // eslint-disable-line
      require('./scripts/generate-rss') // eslint-disable-line
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config
  },
}
