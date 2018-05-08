import React from 'react'
import ReactDOM from 'react-dom'

import SettingsSelect from '../lib'

const options = ['I don\'t know Rick', 'Look at me!', 'I\'m Pickle Riiiiick', 'Wubba lubba dub dub', 'Squanchin\' party bro!']
const label = 'Oh jeez'
const selectedIndex = 4

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