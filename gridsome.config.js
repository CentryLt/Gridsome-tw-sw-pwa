// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Resources
// https://www.brandonpittman.net/tailwind-purge-config/
/* CSS UI Framework */
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind(),
  ]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())
  
module.exports = {
  siteName: 'OutpostV',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
