overwatch-settings-select
=========

[![Build Status](https://travis-ci.org/likethemammal/overwatch-settings-select.svg?branch=master)](https://travis-ci.org/likethemammal/overwatch-settings-select)
[![Coverage Status](https://coveralls.io/repos/github/likethemammal/overwatch-settings-select/badge.svg?branch=master)](https://coveralls.io/github/likethemammal/overwatch-settings-select?branch=master)

[![npm Version](https://img.shields.io/npm/v/overwatch-settings-select.svg)](https://www.npmjs.com/package/overwatch-settings-select)
[![npm Downloads](https://img.shields.io/npm/dm/overwatch-settings-select.svg)](https://www.npmjs.com/package/overwatch-settings-select)
[![license](https://img.shields.io/github/license/likethemammal/overwatch-settings-select.svg)](https://github.com/likethemammal/overwatch-settings-select/blob/master/LICENSE)

A React component modeling the Overwatch Settings select element


## Install

Note: Requires **React 16.2+** for now

    npm install --save overwatch-settings-select
    
## Usage

Check out [example/index.js](example/index.js) for exact usage. Descriptions are below.

### Import

    import SettingsSelect from 'overwatch-settings-select'

### Fonts

#### Futura No 2 D DemiBold

This font is used by Activision Blizzard for much of Overwatch's design. For this component **to match the Overwatch design, including the font is required**. It can be licensed from [MyFonts](http://www.myfonts.com/fonts/urw/futura-no-2/futura-no2-d-demi-bold/).

When using CSS font-face, the font-family should match whats below:

    font-family: 'Futura No 2 D DemiBold';

### Props

| name        | required | type           | default  | desc 
--- | --- | --- | --- | --- |
| onChange | **`X`**  | function | null | Callback method called when stepper is progressed (clicked) forward or backward; Parameter is the new activeIndex to be set in state in the parent component. |
| options | **`X`**  | array | null | Array of strings or Components to be displayed as options |
| selectedIndex | **`X`** | string | null | Index of the selected option, should be stored in parent state and changed during `onChange` |
| label | | string | null | Label for the component, positioned to the left of the options |

## Development

    npm run dev
  
#### Running the example

    cd example/; npm run dev
    
Open [http://localhost:8080/](http://localhost:8080/) to view example


## Tests

    npm test

### License

Made with 🍊 by [Chris Dolphin](https://github.com/likethemammal)

[![license](https://img.shields.io/github/license/likethemammal/overwatch-settings-select.svg?style=flat-square)](https://github.com/likethemammal/overwatch-settings-select/blob/master/LICENSE)