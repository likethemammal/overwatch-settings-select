import {
    createSelector
} from 'reselect'


import general from '@likethemammal/overwatch-general'

const { units } = general

export const options = props => props.options
export const selectedIndex =  props => props.selectedIndex

export const selectedOption = createSelector(
    selectedIndex,
    options,
    units.activeOption,
)

