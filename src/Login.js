// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';

import featuredCommWork from './images/ClipImage-10.png';
import redcircle from './images/redcircle.png';
import yellowcircle from './images/yellowcircle.png';
import greencircle from './images/greencircle.png';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Login() {

    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = event => {
        setUsername(event.target.value);
        console.log(username);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
        console.log(password);
    }

    const checkLogin = (event) => {
        axios.get('https://clip-api.herokuapp.com/api/v1/users/find?username='+username+'&password='+password)
        .then(results => {
            if (results.data[0] == undefined) {
                console.log('Account not found')
                setUsername('');
                setPassword('');
            }
            else if (results.data[0].username == username && results.data[0].password == password) {
                console.log(results.data[0])
                setUsername('');
                setPassword('');

                sessionStorage.setItem("isLoggedIn", 'Yes');
                sessionStorage.setItem("username", username);
                sessionStorage.setItem("password", password);
                sessionStorage.setItem("name", results.data[0].name);
                sessionStorage.setItem("id", results.data[0].id);
                sessionStorage.setItem("email", results.data[0].email);
                sessionStorage.setItem("pronoun", results.data[0].pronoun);
                sessionStorage.setItem("accounttype", results.data[0].accounttype);
                history.push("/");
                window.location.reload();
            }
        })
        .catch(error => {
            console.log(error)
        })
        event.preventDefault();
    }
        return(
           <div>
               <div class="containerCenter">
               {/* {testing} */}
                   <div class="loginArea">
                        <h1 style={{color:"#4306FF", textAlign:"center"}}>Hello!</h1>
                        <div class="loginBox">
                            <form style={{position:"relative"}} >
                            {/* method='GET' action={this.checkLogin} */}
                                <label for="username">Username/Email</label>
                                <br/>
                                <input class="loginInput" type="text" id="username" name="username" value={username} required onChange={handleUsernameChange}/>
                                <br/>
                                <br/>
                                <label for="password">Password</label>
                                <br/>
                                <input class="loginInput" type="password" id="password" name="password" value={password} required onChange={handlePasswordChange}/>
                                <br/>
                                <br/>
                                {/* <div class="loginButton"><a style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}} href='/login'>SIGN IN</a></div>    */}
                                <div class="loginButton"><button onClick={checkLogin} style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black",fontWeight:'bold'}}> SIGN IN </button></div> 
                                <br/>
                                <a href="#"><div style={{fontWeight:"lighter", textAlign:"center"}}>Forgot my password?</div></a>
                                <br/>
                                <br/>
                                <br/>
                                {/* <a href='/dashboard'>dashboard</a> */}
                                <a href="/createaccount"><div style={{fontWeight:"lighter", textAlign:"center"}}>No account? <br/> Become a member, it's free!</div></a>
                            </form>
                        </div>
                   </div>
                   <div class="imageHolder" style={{margin:"100px 50px 0px 50px"}}>
                    <div class="imageHolderBar">
                        <div style={{marginLeft:"15px", paddingTop:"5px"}}>
                            <img src={greencircle} style={{width:"20px", height:"20px"}}/>
                            <img src={yellowcircle} style={{width:"18px", margin:"0px 5px 0px 5px"}}/>
                            <img src={redcircle} style={{width:"20px", height:"20px"}}/>
                        </div>
                    </div>
                    <div style={{fontWeight:"lighter", textAlign:"center", marginTop:"10px"}}><i>Featured community work</i></div>
                </div>
               </div>
           </div>
        );
    
}

export default Login;