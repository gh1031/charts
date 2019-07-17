const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions'],
    }),
    precss({
      browsers: ['last 3 versions']
    })
  ],
}