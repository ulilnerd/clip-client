import React, { Component } from 'react';
import './App.css';

import blueHam from './images/blueClipHam.PNG';
import ClipLogo from './images/clipGray.png';
import Login from './Login.js';

class Navbar extends Component {
    render() {
        return(
        
        <div class="container"> 
            <div class="ClipLogo">
                <h1><a href="/"><img style={{width:"300px"}} src={ClipLogo}/></a></h1>
            </div>
            <div>
                <nav style={{marginTop:"80px"}}>
                    <ul>
                        <li><a href="#">What we do</a></li>
                        <li><a href="/plans">Pricing + Plans</a></li>
                        <li><a style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white",fontWeight:"bold",fontSize:"18px",boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}} href="/login">Log in</a></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
       
        );
    }
}

export default Navbar;