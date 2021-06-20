# Pixel Dimensions for Tailwind CSS

This plugin allows you to quickly generate color classes for Tailwind CSS.

## Requirements

This plugin requires Tailwind CSS 2.2.2 or later.

## Installation

```bash
yarn add proto-tailwindcss-clrs
```

## Usage

Add the plugin in your `tailwind.config.js`.

## Options Available
Pass along a number value to generate that many font sizes.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    // Generates colors for very specific CSS variables
    require('proto-tailwindcss-clrs')({}),
  ],
};
```

The above configuration generates colors which use the following CSS variables:

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

  --clrs-bada55: #bada55;
  --clrs-slate: #708090;
  --clrs-slate4: #4e5964;
  --clrs-white: #ffffff;

  --clrs-navy-a50: #001f3f50;
  --clrs-blue-a50: #0074d950;
  --clrs-aqua-a50: #7fdbff50;
  --clrs-teal-a50: #39cccc50;
  --clrs-olive-a50: #3d997050;
  --clrs-green-a50: #2ecc4050;
  --clrs-lime-a50: #01ff7050;
  --clrs-yellow-a50: #ffdc0050;
  --clrs-orange-a50: #ff851b50;
  --clrs-red-a50: #ff413650;
  --clrs-maroon-a50: #85144b50;
  --clrs-fuchsia-a50: #f012be50;
  --clrs-purple-a50: #b10dc950;
  --clrs-black-a50: #11111150;
  --clrs-gray-a50: #aaaaaa50;
  --clrs-silver-a50: #dddddd50;

  --clrs-bada55-a50: #bada5550;
  --clrs-slate-a50: #70809050;
  --clrs-slate4-a50: #4e596450;
}
```
This plugin generates the equivalent of the following:

```
  theme: {
    extend: {
      colors: {
        'clrs-navy': 'var(--clrs-navy)',
        'clrs-blue': 'var(--clrs-blue)',
        'clrs-aqua': 'var(--clrs-aqua)',
        'clrs-teal': 'var(--clrs-teal)',
        'clrs-olive': 'var(--clrs-olive)',
        'clrs-green': 'var(--clrs-green)',
        'clrs-lime': 'var(--clrs-lime)',
        'clrs-yellow': 'var(--clrs-yellow)',
        'clrs-orange': 'var(--clrs-orange)',
        'clrs-red': 'var(--clrs-red)',
        'clrs-maroon': 'var(--clrs-maroon)',
        'clrs-fuchsia': 'var(--clrs-fuchsia)',
        'clrs-purple': 'var(--clrs-purple)',
        'clrs-black': 'var(--clrs-black)',
        'clrs-gray': 'var(--clrs-gray)',
        'clrs-silver': 'var(--clrs-silver)',

        'clrs-bada55': 'var(--clrs-bada55)',
        'clrs-slate': 'var(--clrs-slate)',
        'clrs-slate4': 'var(--clrs-slate4)',
        'clrs-white': 'var(--clrs-white)',

        'clrs-navy-a50': 'var(--clrs-navy-a50)',
        'clrs-blue-a50': 'var(--clrs-blue-a50)',
        'clrs-aqua-a50': 'var(--clrs-aqua-a50)',
        'clrs-teal-a50': 'var(--clrs-teal-a50)',
        'clrs-olive-a50': 'var(--clrs-olive-a50)',
        'clrs-green-a50': 'var(--clrs-green-a50)',
        'clrs-lime-a50': 'var(--clrs-lime-a50)',
        'clrs-yellow-a50': 'var(--clrs-yellow-a50)',
        'clrs-orange-a50': 'var(--clrs-orange-a50)',
        'clrs-red-a50': 'var(--clrs-red-a50)',
        'clrs-maroon-a50': 'var(--clrs-maroon-a50)',
        'clrs-fuchsia-a50': 'var(--clrs-fuchsia-a50)',
        'clrs-purple-a50': 'var(--clrs-purple-a50)',
        'clrs-black-a50': 'var(--clrs-black-a50)',
        'clrs-gray-a50': 'var(--clrs-gray-a50)',
        'clrs-silver-a50': 'var(--clrs-silver-a50)',

        'clrs-bada55-a50': 'var(--clrs-bada55-a50)',
        'clrs-slate-a50': 'var(--clrs-slate-a50)',
        'clrs-slate4-a50': 'var(--clrs-slate4-a50)',
      },
    },
  }
```

Which you can then use in your HTML like this:

```html
<div class="text-clrs-navy">
  I'm a div with a height of 10 pixels or pickles depending on how you pronounce it.
</div>
```
This plugin extends the colors in Tailwind, so these new colors can be used anywhere that colors are normally used in Tailwind...

