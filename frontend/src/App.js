
//start the app by using in terminal npm run dev and the server by cd /backend and then npm start

import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Navbar from './components/Navbar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';
import Footer from './components/Footer';

function App() {

  const [sideToggle, setsideToggle] = useState(false);

  return (
    <Router>
        <Navbar click={()=> setsideToggle(true)} />
        <SideDrawer show={sideToggle} click={()=> setsideToggle(false)} />
        <BackDrop show={sideToggle} click={()=> setsideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component= {HomeScreen} />
            <Route exact path="/product/:id" component= {ProductScreen} />
            <Route exact path="/cart" component= {CartScreen} />
          </Switch>
        </main>
        <Footer/>
    </Router>
  );
}

export default App;
