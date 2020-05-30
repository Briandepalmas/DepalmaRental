import React, { Component } from 'react'

export default class Pickup extends Component {
    render() {
        return (
            <div>

                <select>
                    <option>-Select Location-</option>
                    <option value="NY">New York</option>
                    <option value="TX">Dallas</option>
                </select>  
                <select>
                    <option>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>  
            </div>
        )
    }
}
