let mix = require('laravel-mix');
mix
  .js('lib/analytics.js', 'dist')
  .babel('dist/analytics.js', 'dist/analytics-babel.js');