const postcss = require('rollup-plugin-postcss');
const url = require('@rollup/plugin-url')
const copy = require('rollup-plugin-copy')

module.exports = {
  rollup(config, options) {
    config.plugins = [
      url({
        fileName: './[hash][extname]',
        include: ['**/*.mp3'],
        emitFiles: true,
        limit: 0
      }),

      copy({
        targets: [
          { src: 'src/**/*.mp3', dest: 'dist' },
        ],
        hook: 'writeBundle'
      }),


      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      ...config.plugins,

    ]

    return config;
  },
};
