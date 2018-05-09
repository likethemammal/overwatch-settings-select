import React from 'react';
import {shallow} from 'enzyme';

import general from '@likethemammal/general-components'

const shared = general.__tests__._shared.tests

import SettingsSelect from '../../../src'

const mock_options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

const mock_onChange = jest.fn()
const onChange = (index) => {
    changable_selectedIndex = index

    mock_onChange()
}

let changable_selectedIndex = 2


//--if theres only one option, error out

describe('SettingsSelect', () => {

    const component = shallow(
        <SettingsSelect
            onChange={onChange}
            selectedIndex={changable_selectedIndex}
            options={mock_options}
        />
    )

    shared.SNAPSHOTS_SHOULD_MATCH([
        component
    ])

    test('if onClick of menu button, open state should be true, Menu should receive open props', () => {
        expect(
            component.state('open')
        ).toEqual(false)

        component.find('button').simulate('click', {
            currentTarget: {},
            target: {
                blur: jest.fn()
            },
        })

        expect(
            component.state('open')
        ).toEqual(true)
    })

    test('if onClick of a <li/> item of Menu, open state should be false, onChange should be called', () => {
        expect(
            component.state('open')
        ).toEqual(true)

        component.find('li').at(0).simulate('click')

        expect(
            component.state('open')
        ).toEqual(false)
    })

    test('if selectedIndex is not zero, when li is clicked, onChange should be called and should return the index of the new selectedOption', () => {

        expect(
            changable_selectedIndex
        ).toEqual(0)

        component.find('li').at(1).simulate('click')

        expect(
            mock_onChange.mock.calls.length
        ).toEqual(2)

        expect(
            changable_selectedIndex
        ).toEqual(1)
    })
})