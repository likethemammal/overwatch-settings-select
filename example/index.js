import React from 'react'
import ReactDOM from 'react-dom'

import SettingsSelect from '../lib'

class BaseExample extends React.Component {

    state = {
        selectedIndex: 0,
    }

    onChange = (selectedIndex) => {
        this.setState({
            selectedIndex,
        })
    }
}

class Example1 extends BaseExample {
    render() {
        const { selectedIndex } = this.state

        return <SettingsSelect
            selectedIndex={selectedIndex}
            onChange={this.onChange}
            options={
                [
                    'I don\'t know Rick',
                    'Look at me!',
                    'I\'m Pickle Riiiiick',
                    'Wubba lubba dub dub',
                    'Squanchin\' party bro!'
                ]
            }
            label={'Oh jeez'}
        />
    }
}

class Example2 extends BaseExample {
    render() {
        const { selectedIndex } = this.state

        return <SettingsSelect
            selectedIndex={selectedIndex}
            onChange={this.onChange}
            options={
                [
                    'Easy',
                    'Medium',
                    'Hard',
                    'Rage',
                ]
            }
            label={'Difficulty'}
        />
    }
}

const Example = () => {
    return <div>
        <Example1/>
        <Example2/>
    </div>
}


ReactDOM.render(
    <Example />,
    document.getElementById('app')
)