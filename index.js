/**
 * TailwindCSS Pixels Sizes
 * Generates pixel sizes via plugin... [ height, width, lineHeight ]
 * @file index.js
 */
const plugin = require('tailwindcss/plugin')

// NOTE:  the base color names come from https://clrs.cc
const NAMES = [
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
]

const PREFIX = 'clrs'

const getColors = (options) => {
  const colorObj = {}
  const base = (options && options['names']) || NAMES
  const map = (options && options['map']) || undefined
  const prefix = (options && options['prefix']) || PREFIX
  const extras = (options && options['extras']) || []
  const skip = (options && options['skip']) || []
  const variants = (options && options['variants']) || []

  if (map) {
    const keys = Object.keys(map)

    keys.forEach((key) => {
      const name = `${prefix}-${key}`
      const value = map[key];
      colorObj[name] = value ? `var(--${name}, ${value})` : `var(--${name})`
    })
  } else {
    const names = [...base, ...extras]

    names.forEach((clr) => {
      const name = `${prefix}-${clr}`
      colorObj[name] = `var(--${name})`
      if (!skip.includes(clr)) {
        variants.forEach((av) => {
          const next = `${name}-${av}`
          colorObj[next] = `var(--${next})`
        })
      }
    })
  }

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

    const results = getColors(options)
    output.theme.extend.colors = { ...results }

    return output
  }
)
