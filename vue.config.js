module.exports = {
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            viewportWidth: 375, // (Number) The width of the viewport.
            viewportHeight: 1334, // (Number) The height of the viewport.
            unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: 'vw', // (String) Expected units.
            selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
            mediaQuery: false // (Boolean) Allow px to be converted in media queries.
          }),
          require('postcss-viewport-units')({
            filterRule(rule) {
              const { selector } = rule
              const regexps = [/^.van.+:before$/i, /^.van.+:after$/i]

              const isMatch = regexps.find(patt => patt.test(selector))

              if (isMatch) return false

              return true
            }
          })
        ]
      }
    }
  }
}
