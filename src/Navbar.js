import React, { Component } from 'react';
import './App.css';

import blueHam from './images/blueClipHam.PNG';
import ClipLogo from './images/clipGray.PNG';
import Login from './Login.js';

class Navbar extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            buttonLink:'/login',
            loginButton:'Login'
        };
    }

    componentDidMount() {
        if (sessionStorage.getItem("isLoggedIn") == 'Yes') {
            this.setState({buttonLink:'/dashboard',loginButton:'Dashboard'});
        }
    }

    render() {
        
        return(
        <div class="container"> 
            <div class="ClipLogo">
                <h1><a href="/"><img style={{width:"300px"}} src={ClipLogo}/></a></h1>
            </div>
            <div>
                <nav style={{marginTop:"80px"}}>
                    <ul>
                        <li><a href="/whatwedo">What we do</a></li>
                        <li><a href="/plans">Pricing + Plans</a></li>
                        <li><a style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white",fontWeight:"bold",fontSize:"18px",boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}} href={this.state.buttonLink}>{this.state.loginButton}</a></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
       
        );
    }
}

export default Navbar;