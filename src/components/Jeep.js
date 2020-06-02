import React, { Component } from 'react'

export default class Jeep extends Component {
    render() {
        let c=80
        return (
            <React.Fragment>

           
            <div className="jeeps">
            
             <img id="jeep1"src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>        
             <img id="jeep2"src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
             <img id="jeep3"src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
             <img id="jeep4"src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
            </div> 
            <div id="click">    
              <h1>${c}/day<button>RESERVE</button></h1>
              <h1>${c}/day<button>RESERVE</button></h1>
              <h1>${c}/day<button>RESERVE</button></h1>
              <h1>${c}/day<button>RESERVE</button></h1>
            </div>
            </React.Fragment>
        )
    }
}
