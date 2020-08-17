module.exports = {
  // Tailwind Paths
  configJS: 'path\\to\\whatever-you-named-tailwind-config.js',
  sourceCSS: 'path\\to\\your-tailwind-source.css',
  outputCSS: 'path\\to\\outputted-global-styles.css',
  watchRelatedFiles: [],
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: []
}
