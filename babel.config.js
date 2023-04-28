module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupIDs: false,
                },
              },
            },
          ],
        },
      },
    ],
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
};
