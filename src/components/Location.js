import React, { Component } from 'react'
export default class Location extends Component {
   

    // GOOGLE MAPS API
    render() {
        let a=`https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=${process.env.REACT_APP_MAPSKEY}`
        return (
            <div>
              <img src={a} alt="map"/>
            </div>
        )
    }
}
