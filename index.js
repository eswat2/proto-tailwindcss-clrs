/**
 * TailwindCSS Pixels Sizes
 * Generates pixel sizes via plugin... [ height, width, lineHeight ]
 * @file index.js
 */
const plugin = require('tailwindcss/plugin')

// NOTE:  the base color names & values come from https://clrs.cc
const COLOR_MAP = {
  navy: '001f3f',
  blue: '0074d9',
  aqua: '7fdbff',
  teal: '39cccc',
  olive: '3d9970',
  green: '2ecc40',
  lime: '01ff70',
  yellow: 'ffdc00',
  orange: 'ff851b',
  red: 'ff4136',
  maroon: '85144b',
  fuchsia: 'f012be',
  purple: 'b10dc9',
  black: '111111',
  gray: 'aaaaaa',
  silver: 'dddddd',
}

const NAMES = Object.keys(COLOR_MAP)

const PREFIX = 'clrs'

const getColors = (options) => {
  const tags = Object.keys(options)

  const colorObj = {}
  const fallbacks = tags.includes('map') || tags.includes('alphas')

  const map = (options && options['map']) || COLOR_MAP
  const alphas = (options && options['alphas']) || []

  const base = (options && options['names']) || NAMES
  const prefix = (options && options['prefix']) || PREFIX
  const extras = (options && options['extras']) || []
  const skip = (options && options['skip']) || []
  const variants = (options && options['variants']) || []

  if (fallbacks) {
    const keys = Object.keys(map)

    keys.forEach((key) => {
      const name = `${prefix}-${key}`
      const value = map[key]
      colorObj[name] = value ? `var(--${name}, ${value})` : `var(--${name})`
      alphas.forEach((av) => {
        const next = `${name}-a${av}`
        const colr = `${value}${av}`
        colorObj[next] = `var(--${next}, ${colr})`
      })
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
