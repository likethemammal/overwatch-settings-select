import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import SettingsSelect from '../../../src'

const options = ['Bronze', 'Throwers', 'Top 500', 'Overwatch League']
const label = 'Matchmaking Teamwork'
const selectedIndex = 2
const onChange = jest.fn()

const props = {
    options,
    label,
    selectedIndex,
    onChange,
}


describe('SettingsSelect', () => {

    const component = shallow(
        <SettingsSelect
            {...props}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

})