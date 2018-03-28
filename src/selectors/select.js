import {
    createSelector
} from 'reselect'

import {
    selectedOption as _selectedOption,
} from '../units/select'

export const options = props => props.options
export const selectedIndex =  props => props.selectedIndex

export const selectedOption = createSelector(
    selectedIndex,
    options,
    _selectedOption,
)

