import React from 'react';
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import Pickup from './components/Pickup'
import Jeep from './components/Jeep'
import Cart from './components/Cart'
import Location from './components/Location'
// import Data from './components/Data'
import './App.css';

function App() {
  
  return (
    <React.Fragment>
      
    <Router> 
      <div className="App">
        <Pickup/>
        
        <nav className="nav"> 
          <h1><Link to="/jeep">Vehicle</Link></h1>    
          <h1><Link to="/Category">Accesories</Link></h1>
          <h1><Link to="/Product">About</Link></h1>
          <h1><Link id="cart" to="/cart">My 🛒</Link></h1>
        </nav>

        <Switch>
          <Route exact path="/jeep" component={Jeep} />
          <Route exact path="/cart" component={Cart} />
          {/* <Route exact path="/Product" component={Products} />
          <Route exact path="/Login" component={Login} />  */}
        </Switch> 
        <Location/>    
      </div>
    </Router> 
    </React.Fragment>
  );
}

export default App;
