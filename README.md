# Custom Colors for Tailwind CSS

This plugin allows you to quickly generate color classes for Tailwind CSS.

## Requirements

This plugin requires Tailwind CSS 2.2.2 or later.

## Installation

```bash
yarn add proto-tailwindcss-clrs
```

## Usage

Add the plugin in your `tailwind.config.js`.


```js
// tailwind.config.js
module.exports = {
  plugins: [
    // Generates colors for very specific CSS variables
    require('proto-tailwindcss-clrs')({}),
  ],
};
```

The default configuration generates colors which use the following CSS variables:

```css
#app {
  --clrs-navy: #001f3f;
  --clrs-blue: #0074d9;
  --clrs-aqua: #7fdbff;
  --clrs-teal: #39cccc;
  --clrs-olive: #3d9970;
  --clrs-green: #2ecc40;
  --clrs-lime: #01ff70;
  --clrs-yellow: #ffdc00;
  --clrs-orange: #ff851b;
  --clrs-red: #ff4136;
  --clrs-maroon: #85144b;
  --clrs-fuchsia: #f012be;
  --clrs-purple: #b10dc9;
  --clrs-black: #111111;
  --clrs-gray: #aaaaaa;
  --clrs-silver: #dddddd;
}
```

This plugin by default generates the equivalent of the following:

```
  theme: {
    extend: {
      colors: {
        'clrs-navy': 'var(--clrs-navy, #001f3f)',
        'clrs-blue': 'var(--clrs-blue, #0074d9)',
        'clrs-aqua': 'var(--clrs-aqua, #7fdbff)',
        'clrs-teal': 'var(--clrs-teal, #39cccc)',
        'clrs-olive': 'var(--clrs-olive, #3d9970)',
        'clrs-green': 'var(--clrs-green, #2ecc40)',
        'clrs-lime': 'var(--clrs-lime, #01ff70)',
        'clrs-yellow': 'var(--clrs-yellow, #ffdc00)',
        'clrs-orange': 'var(--clrs-orange, #ff851b)',
        'clrs-red': 'var(--clrs-red, #ff4136)',
        'clrs-maroon': 'var(--clrs-maroon, #85144b)',
        'clrs-fuchsia': 'var(--clrs-fuchsia, #f012be)',
        'clrs-purple': 'var(--clrs-purple, #b10dc9)',
        'clrs-black': 'var(--clrs-black, #111111)',
        'clrs-gray': 'var(--clrs-gray, #aaaaaa)',
        'clrs-silver': 'var(--clrs-silver, #dddddd)',
  }
```

Which you can then use in your HTML like this:

```html
<div class="text-clrs-navy">
  I'm a div with a height of 10 pixels or pickles depending on how you pronounce it.
</div>
```
This plugin extends the colors in Tailwind, so these new colors can be used anywhere that colors are normally used in Tailwind...

## Options

The default use case supports the following option properties:

- **prefix** - _the prefix string used for all colors_
- **map** - _an object of base color names & default values_
- **alphas** - _an array of 2 digit numbers (ie. 10-99)_

This primary use case generates color definitions with both a css var and a fallback value.

Alternately, if you only want to define color defintions which require css vars, you can use the following option properties:

- **prefix** - _the prefix string used for all colors_
- **names** - _an array of base color names_
- **extras** - _an array of extra color names_
- **variants** - _an array of variant names_
- **skip** - _an array of color names which won't have variants_

The default base colors names & values where generated from [clrs.cc][clrs-cc].

**example 1**

```
require('proto-tailwindcss-clrs')({ 
  prefix: 'ds1',
  map: {
    primary: '#f00', 
    secondary: '#00f',
  },
})
```

this configuration generates the following color classes:

```
ds1-primary
ds1-secondary
```

and those are defined by the following colors:

```
var(--ds1-primary, #f00)
var(--ds1-secondary, #00f)
```

**example 2**

```
require('proto-tailwindcss-clrs')({ 
  names: ['funky'] 
})
```
this configuration generates a single color class: 

```
clrs-funky
```
which requires the following CSS variable:

```
--clrs-funky
```

**example 3**

```
require('proto-tailwindcss-clrs')({ 
  prefix: 'ds1',
  names: ['primary', 'secondary'],
  variants: ['light', 'dark']
})
```
this configuration generates the following color classes:

```
ds1-primary
ds1-primary-light
ds1-primary-dark
ds1-secondary
ds1-secondary-light
ds1-secondary-dark
```
and those use the following CSS variables:

```
--ds1-primary
--ds1-primary-light
--ds1-primary-dark
--ds1-secondary
--ds1-secondary-light
--ds1-secondary-dark
```

## References

- [clrs.cc][clrs-cc] - _A nicer color palette for the web._



[clrs-cc]: https://clrs.cc
