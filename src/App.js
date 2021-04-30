import React, { Component } from 'react';
import './App.css';

import MainPage from './MainPage';
import Footer from './Footer';
import Navbar from './Navbar';
import Login from './Login';
import PricingPlans from './PricingPlans'
// import ClipLogo from './images/clip.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <body>
            <Navbar/>
            <Switch>
                <Route path="/" component={MainPage} exact/>
                <Route path="/login" component={Login}/>
                <Route path="/plans" component={PricingPlans}/>
            </Switch>
            <Footer />
        </body>
      </div>
      </Router>
    );
  }
}

export default App;
