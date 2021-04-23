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

    // constructor() {
    //     super();
    //     this.state = {
    //         hideNav: true
    //     };
    //     this.hideNav = this.hideNav.bind(this);
    // }

    //   hideNav(nav) {
    //       if (this.state.hideNav === true) {
    //         this.setState({ 
    //             hideNav: false
    //         });
    //       }
    //       else if (this.state.hideNav === false) {
    //         this.setState({ 
    //             hideNav: true
    //         });
    //       }
    //   }

    render() {
        return(
            <Router>
            <nav style={{marginTop:"40px"}}>
                {/* <a href="/"><img class="blueHam" src={blueHam}/></a> */}
                {/* <button style={{background: `url(${blueHam})`, width:"35px", height:"35px", textDecoration: "none", border:"none" }} type="button" onClick={() => this.hideNav("hideNav")}></button> */}
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