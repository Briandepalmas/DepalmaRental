import React, { Component } from 'react'

export default class Delete extends Component {



    deleteitem = () => {
        console.log(this.props.item)
        fetch('/brian_api/v1/item/'+this.props.item, 
        { method: 'DELETE',
        })}



    render() {
        return (
            <div>
               <button className="remove" onClick={this.deleteitem}>REMOVE</button> 
            </div>
        )
    }
}
