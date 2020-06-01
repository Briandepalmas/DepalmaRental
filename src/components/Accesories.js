import React, { Component } from 'react'

export default class Accesories extends Component {


state={
    itemName:'',
    itemPrice:0
}

    addCart=()=> { 
       
        const addItem = {
                     method: 'POST',
                     headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify({ 
                     itemName:this.state.itemName,
                     itemPrice:this.state.itemPrice })
             }
            fetch('/brian_api/v1/item',addItem) 
     } 
   

       test=(e)=>{
        e.preventDefault()
        if (e.target.value==="25"){

           this.abc=()=>{
               this.setState({itemName:'T-Shirt',itemPrice:25})
                console.log(this.state.itemPrice) 
            }
           this.abc()
            console.log("VALUE RECEIVED")    
             
            // this.addCart()    
        }
         else if (e.target.value==="50"){
            this.setState({itemName:'T-Shirt',itemPrice:50})

            console.log("nothing here")
            console.log(this.state.itemPrice) 
        }
       }


     render() {
      
        return (
            <React.Fragment>

           
            <div className="jeeps">
            
             <img src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>        
             <img src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
             <img src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
             <img src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
            </div> 
            <div id="click">    
              <button value="25" onClick={this.test}>Add Item</button>
              <button value="50" onClick={this.test}>Add Item</button>
              <button>Add Item</button>
              <button>Add Item</button>
            </div>
            </React.Fragment>
        )
    }
}
