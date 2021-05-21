import React, { Component } from 'react';
import './App.css';

import featuredCommWork from './images/ClipImage-10.png';
import redcircle from './images/redcircle.png';
import yellowcircle from './images/yellowcircle.png';
import greencircle from './images/greencircle.png';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            username:'',
            password:'',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
      }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
        console.log(this.state.username);
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    checkLogin = event => {
        axios.get('http://clip-api.herokuapp.com/api/v1/users/find?username='+this.state.username+'&password='+this.state.password)
        .then(results => {
            if (results.data[0] == undefined) {
                console.log('Account not found')
            }
            else if (results.data[0].username == this.state.username && results.data[0].password == this.state.password) {
                console.log(results.data[0])
                this.props.loginCallback('Yes',results.data[0].username,results.data[0].password);
            }
        })
        .catch(error => {
            console.log(error)
        })
        event.preventDefault();
    }

    render() {

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
                                <input class="loginInput" type="text" id="username" name="username" value={this.state.username} required onChange={this.handleUsernameChange}/>
                                <br/>
                                <br/>
                                <label for="password">Password</label>
                                <br/>
                                <input class="loginInput" type="password" id="password" name="password" value={this.state.password} required onChange={this.handlePasswordChange}/>
                                <br/>
                                <br/>
                                {/* <div class="loginButton"><a style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}} href='/login'>SIGN IN</a></div>    */}
                                <div class="loginButton"><button onClick={this.checkLogin} style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black",fontWeight:'bold'}}> SIGN IN </button></div> 
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
}

export default Login;