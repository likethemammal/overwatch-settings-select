
import general from '@likethemammal/overwatch-general'

const { validations } = general

//selectors
export const selectedOption = (selectedIndex, options) => {

    validations.ACTIVE_INDEX_NONE(selectedIndex)
    validations.OPTIONS_NONE(selectedIndex, options)
    validations.ACTIVE_INDEX_TOO_LARGE(selectedIndex, options)

    return options[selectedIndex]
}
