import React, { Component } from 'react'
// import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
// import Cart from './Cart'
import Location from './Location'
//  import Data from './Data'

export default class Pickup extends Component {

state={
    location:'',
    days:0,
    firstName:'',
    email:''
}

add=()=> { 
   console.log("in addd")
   const addEmployee = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                firstName:this.state.firstName,
                email:this.state.email })
        }
       fetch('/brian_api/v1/employees',addEmployee)

} 




onChange = (event) => (this.setState({[event.target.name]: event.target.value }));
    render() {
        let a=''
        let nyc=<img src={`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn,NY&zoom=14&size=400x400&key=${process.env.REACT_APP_MAPSKEY}`}/>
        let texas=<img src={`https://maps.googleapis.com/maps/api/staticmap?center=Dallas,TX&zoom=14&size=400x400&key=${process.env.REACT_APP_MAPSKEY}`}/>
    if (this.state.location==='NY'){
        a=nyc;
    }else if(this.state.location==='TX'){
        a= texas
    }
        return (


            <div id="input">
                <h1 id="name">Enter Name to Reserve</h1>
              <input className="item-input" type="text" name="firstName" placeholder="Name"
                value={this.state.firstName} onChange={this.onChange}/>

                <input className="price-input" 
                type="text" name="email" placeholder="email"
                value={this.state.email} onChange={this.onChange}/>
               <button className="add-button" onClick={this.add}>SUBMIT</button>
               <h2>How many days would you like to reserve your vehicle?</h2>
                <select id="location" name="location" onChange={this.onChange}>
                    <option>-Select Location-</option>
                    <option value="NY">New York</option>
                    <option value="TX">Dallas</option>
                </select>  
                <select id="days" name="days" onChange={this.onChange}>
                    <option>-Amount of days-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> 
                
                <div className="aa">
                   {/* <Location/>  */}
                   {a}
                </div>
                

            </div>
        )
    }
}
