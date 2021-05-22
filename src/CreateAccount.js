import React, { Component } from 'react';
import './App.css';

import redcircle from './images/redcircle.png';
import yellowcircle from './images/yellowcircle.png';
import greencircle from './images/greencircle.png';

import AccountSetup from './AccountSetup';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



class CreateAccount extends Component {
    render() {
        return(
           
            <div>
            <div class="containerCenter">
                <div class="imageHolder" style={{margin:"100px 50px 0px 0px"}}>
                    <div class="imageHolderBar">
                        <div style={{marginLeft:"15px", paddingTop:"5px"}}>
                            <img src={greencircle} style={{width:"20px", height:"20px"}}/>
                            <img src={yellowcircle} style={{width:"18px", margin:"0px 5px 0px 5px"}}/>
                            <img src={redcircle} style={{width:"20px", height:"20px"}}/>
                        </div>
                    </div>
                    <div style={{fontWeight:"lighter", textAlign:"center", marginTop:"10px"}}><i>Featured community work</i></div>
                </div>
                <div>
                <h1 style={{textAlign:"center"}}>Hello, nice to meet you!!</h1>
                <div class="loginBox">
                    <form style={{position:"relative"}}>
                        <label for="email">Email</label>
                        <br/>
                        <input class="loginInput" type="text" id="email" name="email"/>
                        <br/>
                        <br/>
                        <label for="username">Username</label>
                        <br/>
                        <input class="loginInput" type="text" id="username" name="username"/>
                        <br/>
                        <br/>
                        <label for="password">Password</label>
                        <br/>
                        <input class="loginInput" type="text" id="password" name="password"/>
                        <br/>
                        <br/>
                        <label for="passwordRe">Re-Enter Password</label>
                        <br/>
                        <input class="loginInput" type="text" id="passwordRe" name="passwordRe"/>
                        <br/>
                        <br/>
                        <br/>
                        <div class="loginButton"><a style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}} href="/accountsetup">Create Account</a></div>   
                        <br/>
                        <br/>
                        <a href="/login"><div style={{fontWeight:"lighter", textAlign:"center"}}>Got an account? Log in!</div></a>
                    </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
} 

export default CreateAccount;