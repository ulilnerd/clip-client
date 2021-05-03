import React, { Component } from 'react';
import './App.css';

import MainPage from './MainPage';
import Footer from './Footer';
import Navbar from './Navbar';
import Login from './Login';
import PricingPlans from './PricingPlans';
import WhatWeDo from './WhatWeDo';
import CreateAccount from './CreateAccount';
import Dashboard from './Dashboard';
import CurrentProjects from './CurrentProjects';
import PublishedProjects from './PublishedProjects';

import AccountSetup from './AccountSetup';
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
                <Route path="/whatwedo" component={WhatWeDo}/>
                <Route path="/createaccount" component={CreateAccount}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/currentprojects" component={CurrentProjects}/>
                <Route path="/publishedprojects" component={PublishedProjects}/>
                <Route path="/accountsetup" component={AccountSetup}/>
            </Switch>
            <Footer />
        </body>
      </div>
      </Router>
    );
  }
}

export default App;
