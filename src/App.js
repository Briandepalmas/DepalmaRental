import React from 'react';
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import Pickup from './components/Pickup'
import Jeep from './components/Jeep'
import Cart from './components/Cart'
import Accesories from './components/Accesories'
import About from './components/About'
import './App.css';

function App() {
  
  return (
    <React.Fragment>
      
    <Router> 
      <div className="App">
        <Pickup/>
        
        <nav className="nav"> 
          <h1><Link to="/jeep">Vehicle</Link></h1>    
          <h1><Link to="/Accesories">Accesories</Link></h1>
          <h1><Link to="/About">About</Link></h1>
          <h1><Link id="cart" to="/cart">My 🛒</Link></h1>
        </nav>

        <Switch>
          <Route exact path="/jeep" component={Jeep} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/Accesories" component={Accesories} />
          <Route exact path="/About" component={About} />
        </Switch> 
         
      </div>
    </Router> 
    </React.Fragment>
  );
}

export default App;
