import React, { Component } from 'react';

import ClipLogo from './images/clip.png';
import Hamburger from './images/hamburger.PNG';
import samplePic from './images/samplepic.PNG';
import collabs from './images/collabs.PNG';
import blueHam from './images/blueClipHam.PNG';

import './App.css';
import Navbar from './Navbar';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class MainPage extends Component {

    constructor() {
        super();
        this.state = {
            hideNav: true
        };
        this.hideNav = this.hideNav.bind(this);
    }

      hideNav(nav) {
          if (this.state.hideNav === true) {
            this.setState({ 
                hideNav: false
            });
          }
          else if (this.state.hideNav === false) {
            this.setState({ 
                hideNav: true
            });
          }
      }

    render() {
        return(
            <Router>
            <div>
                <div class="container"> 
                    <div class="hamburger">
                    {this.state.hideNav === true && <button style={{background: `url(${Hamburger})`, width:"35px", height:"35px", textDecoration: "none", border:"none" , position:"absolute"}} type="button" onClick={() => this.hideNav("hideNav")}></button>}
                        {this.state.hideNav === false &&
                        <div class="navBlue">
                            <button style={{background: `url(${blueHam})`, width:"35px", height:"35px", textDecoration: "none", border:"none" }} type="button" onClick={() => this.hideNav("hideNav")}></button>
                        </div>}
                        {this.state.hideNav === false && <Navbar/>}
                    </div>
                    <div class="ClipLogo">
                        <h1><a href="#"><img src={ClipLogo}/></a></h1>
                    </div>
                </div>
                <div class="containerEqual">
                    <div>
                        <img style={{border:"outset"}} src={samplePic}/>
                    </div>
                    <div class="presentIdeas">
                        <h1 class="demo1">PRESENT YOUR IDEAS <br/> WITH CONFIDENCE</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper suscipit luctus. Sed nec purus viverra, fermentum ex a, volutpat nunc. Cras luctus lobortis urna eget fringilla. Sed condimentum est eu porttitor imperdiet. Curabitur egestas, in accumsan purus molestie.
                        <p></p>
                        <button class="startNowButton" type="button">START NOW</button>
                    </div>
                </div>

                <div class="whyUseClip">
                    <h1 style={{textAlign:"center", paddingTop:"40px", fontSize:"42px"}}>WHY USE CLIP</h1>
                    <div class="containerSpace">
                        <div class="presentIdeas">
                            <h1 class="demo1">SHARE YOUR IDEAS <br/> IN FULL QUALITY</h1>
                            Say <i>'Goodbye'</i> to compressing your files
                            <p></p>
                            Clip allows you to upload your files up to 100mbs without compression. Never compromise quality over convience ever again. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper suscipit luctus. Sed nec purus viverra, fermentum ex a, volutpat nun
                        </div>
                        <div class="graySpace"></div>
                    </div>
                    <div class="containerSpace">
                        <div class="graySpace"></div>
                        <div class="presentIdeas">
                            <h1 class="demo1">BE CLEAR AND CONCISE</h1>
                            <i>Simplify your presentation</i>
                            <p></p>
                            Clip allows you to present your ideas on a plane background without other third-party interfaces. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper ullamcorper ullamcorper suscipit luctus.
                        </div>
                    </div>
                    <div class="containerSpace">
                        <div class="presentIdeas">
                            <h1 class="demo1">CONVIENCE AND <br/> CONTROL</h1>
                            <i>Control how YOU share YOUR files.</i>
                            <p></p>
                            Clip allows you to share your files with small URLS. Allow your files to be seen publicly or password protected to secure files. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper suscipit luctus.
                        </div>
                        <div class="graySpace"></div>
                    </div>
                </div>
                <h1 style={{textAlign:"center", marginTop:"40px"}} class="demo1">OUR RECENT COLLABORATIONS</h1>
                <img style={{position:"relative", left:"20%", marginTop: "50px", marginBottom: "50px"}} src={collabs}/>

                {/* test */}
                
            <Switch>
                <Route path="/nav">
                    <Navbar />
                </Route>
            </Switch>
            </div>
            </Router>
        );
    }
}

export default MainPage;