const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.ts?$/,
    include: [path.resolve(__dirname, '../../shared/')],
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: './node_modules/.cache/storybook',
          presets: [
            [
              './node_modules/@babel/preset-env/lib/index.js',
              {
                shippedProposals: true,
                useBuiltIns: 'usage',
                corejs: '3',
              },
            ],
            './node_modules/@babel/preset-react/lib/index.js',
            './node_modules/@babel/preset-flow/lib/index.js',
          ],
          plugins: [],
        },
      },
    ],
  });

  // Return the altered config
  return config;
};
