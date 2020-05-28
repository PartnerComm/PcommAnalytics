const mix = require('laravel-mix');
const package = require('./package.json');

mix.js('lib/analytics.js', 'dist')
  .babel('dist/analytics.js', `dist/latest/analytics.js`)
  .copy('dist/latest/analytics.js', `dist/${package.version}/analytics.js`);
