module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      '@csstools/postcss-global-data',
      {
        files: ['src/lib/css/breakpoints.css']
      }
    ],
    'postcss-nested',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'custom-media-queries': true
        }
      }
    ]
  ]
}
