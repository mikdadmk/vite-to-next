/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // You might try to adjust loader rules for CSS or PostCSS here
    // to ensure compatibility with ESM. This is highly dependent
    // on the specific loaders and their ESM support.

    // Example (might not directly solve this specific error,
    // but shows how to customize loaders):
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'postcss-loader', // Ensure PostCSS is in the chain
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;