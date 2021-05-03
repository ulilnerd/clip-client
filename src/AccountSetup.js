import React, { Component } from 'react';
import './App.css';

class AccountSetup extends Component {

    constructor() {
        super();
        this.state = {
            username:"Jodini"
        };
       
    }

    render() {
        return(
            <div style={{marginTop:"50px",marginLeft:"50px",height:"550px",width:"700px",position:"relative"}}>
                <div style={{color:"blue",fontSize:"32px",fontWeight:"bold"}}>Nice to meet you {this.state.username}</div>
                <i style={{color:"blue"}}>Let's get to know each other better!</i>
                <div class="purpleStripe" style={{marginTop:"10px"}}></div>
                <br/>
                <div style={{fontWeight:"bold"}}>
                    What's your name? How should we call you?
                    <br/>
                    (This will be your screen name.  Don't worry, you can always change it later!)
                    <br/>
                    <input class="loginInput" type="text" id="screenName" name="screenName"/>
                </div>
                <br/>
                <div style={{fontWeight:"bold"}}>
                    Would you like to add a prefered pronoun?
                    <br/>
                    (This will appear beside your screen name, leave blank if you don't prefer one)
                    <br/>
                    <input class="loginInput" type="text" id="screenName" name="screenName"/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="loginButton"><a style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}} href="#">Create Account</a></div>    
                <br/>
                <br/>
                <a href="/login"><div style={{fontWeight:"lighter", textAlign:"center"}}>Got an account? Log in!</div></a>
            </div>
        );
    }
} 

export default AccountSetup;