/**
 * TailwindCSS Pixels Sizes
 * Generates pixel sizes via plugin... [ height, width, lineHeight ]
 * @file index.js
 */
const plugin = require('tailwindcss/plugin')

const primary = [
  'navy',
  'blue',
  'aqua',
  'teal',
  'olive',
  'green',
  'lime',
  'yellow',
  'orange',
  'red',
  'maroon',
  'fuchsia',
  'purple',
  'black',
  'gray',
  'silver',
  'bada55',
  'slate',
  'slate4',
  'white',
]

const prefix = 'clrs'
const alpha = ['a50']

const getColors = () => {
  const colorObj = {}

  primary.forEach((clr) => {
    const name = `${prefix}-${clr}`
    colorObj[name] = `var(--${name})`
    if (clr !== 'white') {
      alpha.forEach((av) => {
        const next = `${name}-${av}`
        colorObj[next] = `var(--${next})`
      })
    }
  })

  return colorObj
}

module.exports = plugin.withOptions(
  function (options) {
    return function ({ addUtilities, e, variants, theme }) {
      // ...
    }
  },
  function (options) {
    const output = {
      theme: {
        extend: {
          colors: {},
        },
      },
    }

    const results = getColors()
    output.theme.extend.colors = { ...results }

    return output
  }
)
