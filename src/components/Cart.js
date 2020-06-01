import React, { Component } from 'react'
import Checkout from './Checkout'
import Delete from './Delete'
export default class Cart extends Component {

    state = {
        isLoading: true,
        employees: [],
        items:[]
        
      };
    
      async componentDidMount() {
        let itemres = await fetch('/brian_api/v1/item/');
        let body = await itemres.json();

        this.setState({  isLoading: false,items:body });
      }


    render() {
        const { isLoading,items} = this.state;
         let amount=0;
        {items.map(item =>
            <div key={item.id}>

                 {amount +=item.itemPrice}
            </div>                   
          )}     
        
          if (isLoading) {
          return <p>Loading...</p>;
        }
        return (
            <div className="faves">
                 {items.map(item =>
                  <div key={item.id}>
                  
                    <h1>Item: {item.itemName} Price: ${item.itemPrice}<Delete item={item.id}/></h1>
                    {/* <br></br> */}
                    <h2 className="item-price"> </h2>             
                    
                  </div>                 
                )}
               <h1 id="test">Total ${amount}<Checkout/></h1> 
               
            </div>
        )
    }
}
