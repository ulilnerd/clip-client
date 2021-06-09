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
import NotFoundPage from "./404";

import AccountSetup from './AccountSetup';
import axios from 'axios';
// import ClipLogo from './images/clip.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn: 'No',
        username:'',
        password:'',
        name: '',
        id:'',
        email:'',
        pronoun:'',
        accounttype:'',
    };
  }
  

  render() {
    return (
      <Router>
      <div className="App">
        <body>
            <Navbar isLoggedIn={this.state.isLoggedIn}/>
            isLoggedIn: <i style={{color:sessionStorage.getItem("statusColor")}}>{sessionStorage.getItem("isLoggedIn")}</i>
            <br/>
            Username: {sessionStorage.getItem("username")}
            <br/>
            Name: {sessionStorage.getItem("name")}
            <br/>
            Account Type: {sessionStorage.getItem("accounttype")}
            <br/>
            Email: {sessionStorage.getItem("email")}
            <br/>
            Pronoun: {sessionStorage.getItem("pronoun")}
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
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer />
        </body>
      </div>
      </Router>
    );
  }
}

export default App;
