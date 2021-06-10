import React, { useState, useEffect } from 'react';
import './App.css';

import blueHam from './images/blueClipHam.PNG';
import ClipLogo from './images/clipGray.PNG';
import Login from './Login.js';
import { useHistory } from "react-router-dom";

function Navbar() {
    
    const history = useHistory();
    const [buttonLink, setButtonLink] = useState('/login');
    const [loginButton, setLoginButton] = useState('Login');
    const [loggedInAs, setLoggedInAs] = useState('');
    const [logoutButton, setLogoutButton] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem("isLoggedIn") == 'Yes') { 
            setButtonLink('/dashboard');
            setLoginButton('Dashboard')
            setLoggedInAs(<li>Logged in as: <b>{sessionStorage.getItem("username")}</b></li>)
            setLogoutButton(<li><button onClick={accountLogout}>Logout</button></li>)
        }
      });

    const accountLogout = () => {
        sessionStorage.setItem('isLoggedIn', 'No');
        sessionStorage.setItem("username", '');
        sessionStorage.setItem("password", '');
        sessionStorage.setItem("name", '');
        sessionStorage.setItem("id", '');
        sessionStorage.setItem("email", '');
        sessionStorage.setItem("pronoun", '');
        sessionStorage.setItem("accounttype", '');
        history.push("/");
        window.location.reload();
    };

    return(
        <div class="container"> 
            <div class="ClipLogo">
                <h1><a href="/"><img style={{width:"300px"}} src={ClipLogo}/></a></h1>
            </div>
            <div>
                <nav style={{marginTop:"80px"}}>
                    <ul>
                        {loggedInAs}
                        <li><a href="/whatwedo">What we do</a></li>
                        <li><a href="/plans">Pricing + Plans</a></li>
                        <li><a style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white",fontWeight:"bold",fontSize:"18px",boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}} href={buttonLink}>{loginButton}</a></li>
                        {logoutButton}
                    </ul>
                </nav>
            </div>
        </div>
    );
    
}

export default Navbar;