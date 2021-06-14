import React, {useState} from 'react';
import './App.css';

import redcircle from './images/redcircle.png';
import yellowcircle from './images/yellowcircle.png';
import greencircle from './images/greencircle.png';

import AccountSetup from './AccountSetup';
import { useHistory } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function CreateAccount() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    

    const handleUsernameChange = event => {
        setUsername(event.target.value);
        console.log(username);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
        console.log(password);
    }
    const handlePassword2Change = event => {
        setPassword2(event.target.value);
        console.log(password2);
    }
    const handleEmailChange = event => {
        setEmail(event.target.value);
        console.log(email);
    }

    const createAccount = () => {
        if (password === password2) {
            sessionStorage.setItem("usernameTemp", username);
            sessionStorage.setItem("passwordTemp", password);
            sessionStorage.setItem("emailTemp", email);

            setUsername('');
            setPassword('');
            setPassword2('');
            setEmail('');

            history.push("/accountsetup");
            window.location.reload();
        }
        else {
            setUsername('');
            setPassword('');
            setPassword2('');
            setEmail('');
            console.log("The password you have entered does not match")
        }
    }
    
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
                        <input class="loginInput" type="text" id="email" name="email" required onChange={handleEmailChange}/>
                        <br/>
                        <br/>
                        <label for="username">Username</label>
                        <br/>
                        <input class="loginInput" type="text" id="username" name="username" required onChange={handleUsernameChange}/>
                        <br/>
                        <br/>
                        <label for="password">Password</label>
                        <br/>
                        <input class="loginInput" type="text" id="password" name="password" required onChange={handlePasswordChange}/>
                        <br/>
                        <br/>
                        <label for="passwordRe">Re-Enter Password</label>
                        <br/>
                        <input class="loginInput" type="text" id="passwordRe" name="passwordRe" required onChange={handlePassword2Change}/>
                        <br/>
                        <br/>
                        <br/>
                        <div class="loginButton"><button onClick={createAccount} style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black",fontWeight:'bold'}}>Create Account</button></div>  
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

export default CreateAccount;