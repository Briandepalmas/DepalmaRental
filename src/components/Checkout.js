import React, { Component } from 'react'

export default class Checkout extends Component {
    buy=()=>{
        alert("YOUR RESERVATION IS COMPLETE")
    }
    render() {
        return (
            <div>
                <button onClick={this.buy}>Checkout</button>
            </div>
        )
    }
}
