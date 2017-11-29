import React, {PureComponent} from 'react'
import {FOO} from 'constants'
import {BAR} from './constants'

export default class App extends PureComponent {
    constructor(props) {
        super(props)

        this._message = FOO

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this._message)
    }

    render() {
        return (
            <button type="button" onClick={this.handleClick}>
                {BAR}
            </button>
        )
    }
}
