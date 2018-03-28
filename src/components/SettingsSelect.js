import React, { Component } from 'react'
import _ from 'underscore'

import Menu  from 'material-ui/Menu'

import DownSVG from 'svg-icon/dist/svg/mfglabs/chevron_down.svg'

import general from '@likethemammal/general-components'


const { SVG } = general.components

import css from './SettingsSelect.less'

import {
    selectedOption as _selectedOption,
} from '../selectors/select'

const menuOverrideProps = {
    marginThreshold: 0,
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
    },
    MenuListProps: {
        disablePadding: true,
        className: css.list_override,
        classes: {
            root: css.list_root_override,
        }
    },
    PaperProps: {
        style: {
            background: 'transparent'
        }
    }
}

export default class SettingsSelect extends Component {

    state = {
        open: false,
        anchorEl: null,
    }

    onMenuOpen = (ev) => {
        this.setState({ open: true, anchorEl: ev.currentTarget })

        ev.target.blur()
    }

    onMenuClose = (ev) => {
        this.setState({ open: false, })
    }

    onSelect = (index) => {
        this.setState({ open: false })

        this.props.onChange(index)
    }

    render() {
        const { options, label, selectedIndex } = this.props

        const {
            open,
            anchorEl,
        } = this.state

        const selectedOption = _selectedOption(this.props)

        return <div className={css.container}>
            <div className={css.inner}>

                <div
                    className={!open ? css.label : css.label__selected}
                >
                    {label}
                </div>

                <div className={css.select}>

                    <button
                        onClick={this.onMenuOpen}
                        className={css.active}
                    >
                        {selectedOption}
                        <div className={css.icon_container}>
                            <SVG
                                raw={DownSVG}
                                className={css.icon}
                            />
                        </div>
                    </button>

                    <Menu
                        {...menuOverrideProps}
                        id={label}
                        open={open}
                        anchorEl={anchorEl}
                        onBackdropClick={this.onMenuClose}
                    >
                        {_.map(options, (option, i) => {
                            return <li
                                onClick={this.onSelect.bind(null, i)}
                                key={i}
                                className={css.list_item}
                                selected={i === selectedIndex}
                            >
                                {option}
                            </li>
                        })}
                    </Menu>
                </div>
            </div>
        </div>
    }
}
