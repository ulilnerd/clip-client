import React, { Component } from 'react';
import './App.css';

import blueHam from './images/blueClipHam.PNG';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Navbar extends Component {


    render() {
        return(
            <Router>
            <nav>
                <a href="/"><img class="blueHam" src={blueHam}/></a>
                <ul>
                    <li><a href="#"><b>UPLOAD</b></a></li>
                    <li><a href="#"><b>LOGIN</b></a></li>
                    <li><a href="#"><b>MY ACCOUNT</b></a></li>
                    <li><a href="#"><b>SUBSCRIPTIONS</b></a></li>
                    <li><a href="#"><b>ABOUT US</b></a></li>    
                    <li><a href="#"><b>CONTACT</b></a></li>  
                </ul>
            </nav>
            <Switch>
                <Route path="/">
                    
                </Route>
            </Switch>
            </Router>
        );
    }
}

export default Navbar;