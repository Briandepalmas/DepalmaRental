import React, { Component } from 'react'

export default class Accesories extends Component {


state={
    itemName:'abc',
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
   

       test=()=>{
       
        if (this.state.itemPrice===25){
            this.addCart()
            this.setState({itemPrice:0})
            console.log(this.state.itemPrice) 
            console.log("VALUE RECEIVED") 
               
                
        }
         else if (this.state.itemPrice===50){
            this.addCart()
            this.setState({itemPrice:0})

            console.log("nothing here")
            console.log(this.state.itemPrice) 
            
        }
       }



     render() {
     
        return (
            <React.Fragment>
             {this.test()}
           
            <div className="jeeps">
            
             <img src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>        
             <img src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
             <img src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
             <img src="https://cnet2.cbsistatic.com/img/MH34bc-EK5oBEUKfcgqhaCerq10=/940x0/2019/09/26/25dfe142-99e1-494d-98a7-4c80b7abd663/2020-wrangler-promo.jpg" width="300" height="200" alt="jeep"/>
            </div> 
            <div id="click">    
              <button value="25" onClick={()=>this.setState({itemName:"heroku",itemPrice:25})}>Add Item</button>
              <button value="50" onClick={()=>this.setState({itemName:"zzzzzz",itemPrice:50})}>Add Item</button>
              <button>Add Item</button>
              <button>Add Item</button>
            </div>
            </React.Fragment>
        )
    }
}
