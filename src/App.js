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

  handleCallback = (childData,username,password,email,name,pronoun,accounttype) =>{
    this.setState({
        isLoggedIn: childData,
        username: username,
        password: password,
        email: email,
        name: name,
        pronoun: pronoun,
        accounttype: accounttype,
        statusColor:"green"
    })
    sessionStorage.setItem("isLoggedIn", this.state.isLoggedIn);
    sessionStorage.setItem("username", this.state.username);
    sessionStorage.setItem("password", this.state.password);
    sessionStorage.setItem("name", this.state.name);
    sessionStorage.setItem("id", this.state.id);
    sessionStorage.setItem("email", this.state.email);
    sessionStorage.setItem("pronoun", this.state.pronoun);
    sessionStorage.setItem("accounttype", this.state.accounttype);

    sessionStorage.setItem("statusColor", "green");
    console.log(this.state.isLoggedin)
  }

  handleCreateAccount = (email,username,password) => {
    this.setState({
      username: username,
      password: password,
      email: email
    })
    sessionStorage.setItem("username", this.state.username);
    sessionStorage.setItem("password", this.state.password);
    sessionStorage.setItem("email", this.state.email);
  }

  handleAccountSetup = (name,pronoun) => {
    this.setState({
      name: name,
      pronoun: pronoun
    })
    sessionStorage.setItem("name", this.state.name);
    sessionStorage.setItem("pronoun", this.state.pronoun);

    axios.post('http://clip-api.herokuapp.com/api/v1/users/createuser?username='+sessionStorage.getItem("username")+'&password='+sessionStorage.getItem("password")+'&email='+sessionStorage.getItem("email")+'&name='+sessionStorage.getItem("name")+'&pronoun='+sessionStorage.getItem("pronoun"))
        .then(results => {
            console.log(results)
        })
        .catch(error => {
            console.log(error)
        })
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
