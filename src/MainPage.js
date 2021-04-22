import React, { Component } from 'react';
import ClipLogo from './images/clip.png';
import Hamburger from './images/hamburger.PNG';

import './App.css';
import Navbar from './Navbar';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class MainPage extends Component {


    render() {
        return(
            <Router>
            <div>
                <div class="container"> 
                    <div class="hamburger">
                        <Link to="/nav"><img class="blueHam" src={Hamburger}/></Link>
                    </div>
                    <div class="ClipLogo">
                        <h1><a href="#"><img src={ClipLogo}/></a></h1>
                    </div>
                </div>
                {/* <Navbar/> */}
            <Switch>
                <Route path="/nav">
                    <Navbar />
                </Route>
            </Switch>
            </div>
            </Router>
        );
    }
}

export default MainPage;