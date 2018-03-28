[![Build Status](https://travis-ci.org/likethemammal/overwatch-settings-select.svg?branch=master)](https://travis-ci.org/likethemammal/overwatch-settings-select)
[![Coverage Status](https://coveralls.io/repos/github/likethemammal/overwatch-settings-select/badge.svg?branch=master)](https://coveralls.io/github/likethemammal/overwatch-settings-select?branch=master)

overwatch-settings-select
=========

A React component modeling the Overwatch Settings select element


## Installation

Note: Supports **React 16.2+** for now

  `npm install`

## Development

  `npm run dev`

## Tests

  `npm test`

## Publishing

  `npm run build` and then publish

## Contributing

Its an example

    font-family: 'Futura No 2 D DemiBold';

http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/


### Props

| name        | type           | default  | desc 
--- | --- | --- | --- |
| defaultColor | string | #323c50 |  |
| activeColor | string | #ffffff |  |
| textColor | string | #00c3ff |  |
| onChange | function | null |  |
| label | string | null |  |
| options | array | null | array of objects, with required keys `id`, `label`, `icon`, `Component` |
| *option*.**id** | string | null |  |
| *option*.**label** | string | null |  |
| *option*.**icon** | string | null |  |
| *option*.**Component** | Component | null |  |
