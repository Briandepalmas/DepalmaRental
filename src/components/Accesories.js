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
            
             <img src="https://www.gear.jeep.com/media/catalog/product/j/e/jeep-beck-mug-14rfl.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" width="300" height="200" alt="jeep"/>        
             <img src="https://store.juventus.com/data/store/product/2/26345/product.jpg" width="300" height="200" alt="jeep"/>
             <img src="https://s.yimg.com/aah/yhst-83673118800219/jeep-658-golf-umbrella-16.jpg" width="300" height="200" alt="jeep"/>
             <img src="https://i.etsystatic.com/20076583/r/il/77e6b2/1875331862/il_794xN.1875331862_8qyr.jpg" width="300" height="200" alt="jeep"/>
            </div> 
            <div id="click">    
             <h1>Mug $25<button  onClick={()=>this.setState({itemName:"T-Shirt",itemPrice:25})}>Add Item</button></h1> 
             <h1>Jersey $100<button  onClick={()=>this.setState({itemName:"",itemPrice:50})}>Add Item</button></h1> 
             <h1>Umbrella $35<button>Add Item</button></h1> 
             <h1>Beach Towel $40<button>Add Item</button></h1>
            </div>
            </React.Fragment>
        )
    }
}
