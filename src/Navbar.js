import React, { Component } from 'react';
import './App.css';

import blueHam from './images/blueClipHam.PNG';
import ClipLogo from './images/clip.png';

class Navbar extends Component {
    render() {
        return(

            <div class="container"> 
            {/* <div class="hamburger">
            {this.state.hideNav === true && <button style={{background: `url(${Hamburger})`, width:"35px", height:"35px", textDecoration: "none", border:"none" , position:"absolute"}} type="button" onClick={() => this.hideNav("hideNav")}></button>}
                {this.state.hideNav === false &&
                <div class="navBlue">
                    <button style={{background: `url(${blueHam})`, width:"35px", height:"35px", textDecoration: "none", border:"none" }} type="button" onClick={() => this.hideNav("hideNav")}></button>
                </div>}
                {this.state.hideNav === false && <Navbar/>}
            </div> */}
            <div class="ClipLogo">
                <h1><a href="#"><img src={ClipLogo}/></a></h1>
            </div>
            <div>
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
            </div>
        </div>

        );
    }
}

export default Navbar;