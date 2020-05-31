import React, { Component } from 'react'

export default class Data extends Component {

    render() {
        console.log(this.props.info)
        return (
            <div >
                <h1 id="data">{this.props.info}</h1>
            </div>
        )
    }
}

