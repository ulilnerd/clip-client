import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

import featuredCommWork from './images/ClipImage-10.png';

class Login extends Component {


    render() {
        return(
           <div>
               <div class="containerCenter">
                   <div class="loginArea">
                        <h1 style={{color:"#4306FF", textAlign:"center"}}>Hello!</h1>
                        <div class="loginBox">
                            <form style={{position:"relative"}}>
                                <label for="username">Username/Email</label>
                                <br/>
                                <input class="loginInput" type="text" id="username" name="username"/>
                                <br/>
                                <br/>
                                <label for="password">Password</label>
                                <br/>
                                <input class="loginInput" type="text" id="password" name="password"/>
                                <br/>
                                <br/>
                                <div class="loginButton"><a style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}} href="#">SIGN IN</a></div>    
                                <br/>
                                <a href="#"><div style={{fontWeight:"lighter", textAlign:"center"}}>Forgot my password?</div></a>
                                <br/>
                                <br/>
                                <br/>
                                <a href="#"><div style={{fontWeight:"lighter", textAlign:"center"}}>No account? <br/> Become a member, it's free!</div></a>
                            </form>
                        </div>
                   </div>
                   <div class="featuredCommWork">
                        <div style={{position:"absolute",left:"40%",top:"18%",fontWeight:"lighter"}}><i>Featured community work</i></div>
                        <img style={{width:"1000px", height:"700px"}} src={featuredCommWork}/>
                   </div>
               </div>
           </div>
        );
    }
}

export default Login;