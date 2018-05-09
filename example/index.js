import React from 'react'
import ReactDOM from 'react-dom'

import SettingsSelect from '../lib'

const props_1 = {
    options: ['I don\'t know Rick', 'Look at me!', 'I\'m Pickle Riiiiick', 'Wubba lubba dub dub', 'Squanchin\' party bro!'],
    label: 'Oh jeez',
    selectedIndex: 4,
}

const props_2 = {
    options: ['Easy', 'Medium', 'Hard', 'Rage'],
    label: 'Difficulty',
    selectedIndex: 1,
}

const Example = () => {
    return <div>
        <SettingsSelect
            {...props_1}
        />
        <SettingsSelect
            {...props_2}
        />
    </div>
}


ReactDOM.render(
    <Example />,
    document.getElementById('app')
)