import React from 'react'
import ReactDOM from 'react-dom'

import SettingsSelect from '../lib'

const options = ['At the sk', 'fucksd sd', 'Some option']
const label = 'Some label'
const selectedIndex = 2

const props = {
    options,
    label,
    selectedIndex,
    onChange: () => {}
}


ReactDOM.render(
    <SettingsSelect
        {...props}
    />,
    document.getElementById('app')
)