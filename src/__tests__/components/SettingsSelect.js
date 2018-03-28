import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import SettingsSelect from '../../../lib'

const options = ['At the sk', 'fucksd sd', 'Some option']
const label = 'Some label'
const selectedIndex = 2
const onChange = jest.fn()

const props = {
    options,
    label,
    selectedIndex,
    onChange,
}


describe('SettingsSelect', () => {
    // Render a checkbox with label in the document
    const component = shallow(
        <SettingsSelect
            {...props}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

})