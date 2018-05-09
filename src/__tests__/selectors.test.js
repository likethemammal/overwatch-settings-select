import {
    options as basic_options,
    selectedIndex as basic_selectedIndex,
    selectedIndex,
    selectedOption,
} from '../selectors'

import _ from 'underscore'


const basic_selectors = {
    options: basic_options,
    selectedIndex: basic_selectedIndex,
}


const mock_state = {
    options: ['test', 'some other'],
    selectedIndex: 0,
    onChange: jest.fn(),
}

describe('basic selectors', () => {
    describe('given a state object', () => {

        _.map(basic_selectors, (selector, key) => {
            test(`selector for ${key}`, () => {
                expect(selector(mock_state)).toEqual(mock_state[key])
            })
        })

    })
})

describe('renderer selectors', () => {
    describe('given a state object', () => {

        describe('selectedOption', () => {
            test('if state has activeIndex and options, return the option of that index', () => {
                expect(
                    selectedOption(mock_state)
                ).toEqual('test')
            })

            test('if state does not have activeIndex and/or option, throw error', () => {
                expect(() => {
                    selectedOption({})
                }).toThrow()
            })
        })

        describe('selectedIndex', () => {
            test('if state has toggled, return whether that index is less than last index', () => {
                expect(
                    selectedIndex(mock_state)
                ).toEqual(0)
            })

            test('if state does not have toggled, return undefined', () => {
                expect(
                    selectedIndex({})
                ).toEqual(void(0))
            })
        })

    })
})
