let partial_import   = require('postcss-partial-import'),
    tailwindcss      = require('tailwindcss'),
    autoprefixer     = require('autoprefixer'),
    mixins           = require('postcss-mixins'),
    variables        = require('postcss-advanced-variables');



module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    partial_import,
    mixins,
    variables,
    tailwindcss,
    autoprefixer,
  ]
}
