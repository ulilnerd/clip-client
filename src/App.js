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

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn: 'No',
        username:'',
        password:''
    };
  }

  handleCallback = (childData,username,password) =>{
    this.setState({
        isLoggedIn: childData,
        username: username,
        password: password
    })
    sessionStorage.setItem("isLoggedIn", this.state.isLoggedIn);
    sessionStorage.setItem("username", this.state.username);
    sessionStorage.setItem("password", this.state.password);
    console.log(this.state.isLoggedin)
  }

  render() {
    return (
      <Router>
      <div className="App">
        <body>
            <Navbar isLoggedIn={this.state.isLoggedIn}/>
            isLoggedIn: {sessionStorage.getItem("isLoggedIn")}
            <br/>
            Username: {sessionStorage.getItem("username")}
            <br/>
            Password: {sessionStorage.getItem("password")}
            <Switch>
                <Route path="/" component={MainPage} exact/>
                <Route path="/login" render={ () => <Login loginCallback={this.handleCallback}/> }/>
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
