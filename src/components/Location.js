import React, { Component } from 'react'
import axios from 'axios'
export default class Location extends Component {
   

statee={
    data:''
}

    componentDidMount(){
        axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn,NY&zoom=12&size=400x400&key=${process.env.REACT_APP_MAPSKEY}`)
    .then(res => {
      const recipes = res.data;
    //   console.log("recipes ---->", recipes)
      
      this.setState({data: recipes})
    //   console.log("recipes ---->", this.state.data)
    })
   
    .catch(error => {
      console.log('there is an error', error)
    })

  }
    
   
   
   //API supposed to render 
    render() {
        // const{recipe}=this.state.data
        return (
            <div>
              {/* <img src={recipe}/> */}
            </div>
        )
    }
}
