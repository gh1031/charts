const autoprefixer = require('autoprefixer');
const precss = require('precss');
const browsers = {
  browsers:['last 2 versions']
}

module.exports = {
  plugins: [autoprefixer(browsers), precss(browsers)],
}