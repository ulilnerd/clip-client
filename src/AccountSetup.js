import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function AccountSetup() {

    const history = useHistory();
    const [displayname, setDisplayname] = useState('');
    const [pronoun, setPronoun] = useState('');
   

    const handleDisplaynameChange = event => {
        setDisplayname(event.target.value);
        console.log(displayname);
    }
    const handlePronounChange = event => {
        setPronoun(event.target.value);
        console.log(pronoun);
    }

    const createAccount = (event) => {
        sessionStorage.setItem('name', displayname)
        sessionStorage.setItem('pronoun', pronoun)
        sessionStorage.setItem('isLoggedIn', 'Yes')
        axios.post('https://clip-api.herokuapp.com/api/v1/users/createuser?username='+sessionStorage.getItem("usernameTemp")+'&password='+sessionStorage.getItem('passwordTemp')+'&email='+sessionStorage.getItem('emailTemp')+'&name='+displayname+'&pronoun='+pronoun)
        .then(results => {
            console.log(results.data[0])
            setDisplayname('');
            setPronoun('');
            history.push("/dashboard");
            window.location.reload();
        })
        .catch(error => {
            console.log(error)
            setDisplayname('');
            setPronoun('');
        })
        event.preventDefault();
    }

        return(
            <div style={{marginTop:"50px",marginLeft:"50px",height:"550px",width:"700px",position:"relative"}}>
                <div style={{color:"blue",fontSize:"32px",fontWeight:"bold"}}>Nice to meet you {sessionStorage.getItem('usernameTemp')}</div>
                <i style={{color:"blue"}}>Let's get to know each other better!</i>
                <div class="purpleStripe" style={{marginTop:"10px"}}></div>
                <br/>
                <div style={{fontWeight:"bold"}}>
                    What's your name? How should we call you?
                    <br/>
                    (This will be your screen name.  Don't worry, you can always change it later!)
                    <br/>
                    <input class="loginInput" type="text" id="screenName" name="screenName" required onChange={handleDisplaynameChange}/>
                </div>
                <br/>
                <div style={{fontWeight:"bold"}}>
                    Would you like to add a prefered pronoun?
                    <br/>
                    (This will appear beside your screen name, leave blank if you don't prefer one)
                    <br/>
                    <input class="loginInput" type="text" id="screenName" name="screenName" required onChange={handlePronounChange}/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="loginButton"><button onClick={createAccount} style={{border:"solid 2px black", borderRadius:"6px", padding:"10px 50px 10px 50px", backgroundColor:"white", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black",fontWeight:'bold'}}>Create Account</button></div> 
                <br/>
                <br/>
                <a href="/login"><div style={{fontWeight:"lighter", textAlign:"center"}}>Got an account? Log in!</div></a>
            </div>
        );
} 

export default AccountSetup;