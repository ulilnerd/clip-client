import React, { Component } from 'react';
import './App.css';

import blueHam from './images/blueClipHam.PNG';

class Navbar extends Component {
    render() {
        return(
            <nav style={{marginTop:"80px"}}>
                {/* <a href="/"><img class="blueHam" src={blueHam}/></a> */}
                {/* <button style={{background: `url(${blueHam})`, width:"35px", height:"35px", textDecoration: "none", border:"none" }} type="button" onClick={() => this.hideNav("hideNav")}></button> */}
                {/* <ul>
                    <li><a href="#"><b>UPLOAD</b></a></li>
                    <li><a href="#"><b>LOGIN</b></a></li>
                    <li><a href="#"><b>MY ACCOUNT</b></a></li>
                    <li><a href="#"><b>SUBSCRIPTIONS</b></a></li>
                    <li><a href="#"><b>ABOUT US</b></a></li>    
                    <li><a href="#"><b>CONTACT</b></a></li>  
                </ul> */}
                <ul>
                    <li><a href="#">What we do</a></li>
                    <li><a href="#">Pricing + Plans</a></li>
                    <li><a href="#">Log in</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;