import React, { Component } from 'react'
import axios from 'axios'
export default class Location extends Component {
   

state={
    data:''
}

  //  async componentDidMount(){
  //      await  axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=${process.env.REACT_APP_MAPSKEY}`)
  //   .then(res => {
  //     const recipes = res.data;
  //   //   console.log("recipes ---->", recipes)
      
  //     this.setState({data: recipes})
  //   //   console.log("recipes ---->", this.state.data)
  //   })
   
  //   .catch(error => {
  //     console.log('there is an error', error)
  //   })

  // }
    
   
   
    
    render() {
        let a=`https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=${process.env.REACT_APP_MAPSKEY}`
        return (
            <div>
              <img src={a} alt="map"/>
            </div>
        )
    }
}
