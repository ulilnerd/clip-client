import React, { Component } from 'react';

import ClipLogo from './images/clip.png';
import Hamburger from './images/hamburger.PNG';
import samplePic from './images/samplepic.PNG';
import collabs from './images/collabs.PNG';
import blueHam from './images/blueClipHam.PNG';
import paper from './images/Paper-05.png';
import medal from './images/medal.PNG';
import glass from './images/glass.PNG';
import pointer from './images/pointer.PNG';

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
                    {/* <div class="hamburger">
                    {this.state.hideNav === true && <button style={{background: `url(${Hamburger})`, width:"35px", height:"35px", textDecoration: "none", border:"none" , position:"absolute"}} type="button" onClick={() => this.hideNav("hideNav")}></button>}
                        {this.state.hideNav === false &&
                        <div class="navBlue">
                            <button style={{background: `url(${blueHam})`, width:"35px", height:"35px", textDecoration: "none", border:"none" }} type="button" onClick={() => this.hideNav("hideNav")}></button>
                        </div>}
                        {this.state.hideNav === false && <Navbar/>}
                    </div> */}
                    <div class="ClipLogo">
                        <h1><a href="#"><img src={ClipLogo}/></a></h1>
                    </div>
                    <div>
                        <Navbar />
                    </div>
                </div>
                <div class="firstBlock">
                    <div class="blueBlock"></div>
                    <img style={{position:"absolute", height: "600px", marginTop: "50px"}}src={paper}/>
                    <div class="clipText2">
                        <img src={pointer}/>
                        <h1 style={{fontSize:"42px"}}>Present your ideas with confidence.</h1>
                        Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat.
                    </div>
                    <div class="graySpace" style={{position:"absolute", marginLeft:"500px", marginTop: "55px"}}></div>
                    <div class="clipCode">
                        <div style={{fontWeight:"bold", fontSize:"32px", marginLeft:"5px", display:"inline-block"}}>Clip Code:</div>
                        <input style={{border:"none", marginLeft: "10px"}} type="text" id="code" name="code"/>
                    </div>
                    <button type="button" style={{width:"300px", height: "50px", position:"absolute", marginLeft:"1000px", marginTop:"400px", backgroundColor:"white", borderRadius: "6px", borderColor:"black", borderWidth:"3px"}}><div style={{fontWeight:"bold", fontSize:"32px"}}>Present Now!</div></button>
                </div>

                <div class="whatIsClip">
                    <h1 style={{textAlign:"center", fontSize:"42px"}}>What is Clip?</h1>
                    {/* <div class="grayBanner"></div> */}
                    <div class="containerSpace" style={{marginBottom:"50px"}}>
                        <div>
                            <div class="clipText">
                                <img src={medal}/>
                                <h1 style={{fontSize:"42px"}}>Share your ideas in full quality.</h1>
                                Clip allows you to upload your files up to
                                100mbs without compression. Never compro-
                                mise quality over convenience ever again
                                Lorem ipsum dolor sit amet, consectetur adip-
                                iscing elit. Donec ullamcorper suscipit luctus.
                                Sed nec purus viverra, fermentum ex a, volut-
                                pat nunc.
                            </div>
                            <img src={paper}/>
                        </div>
                        <div>
                            <div class="clipText">
                                <img src={glass}/>
                                <h1 style={{fontSize:"42px"}}>Be clear and <br/> Concise.</h1>
                                Clip allows you to present your ideas on a
                                plane background without other third-party
                                interfaces. Lorem ipsum dolor sit amet, con-
                                sectetur adipiscing elit. Donec ullamcorper ul-
                                lamcorper ullamcorper suscipit luctus.
                            </div>
                            <img src={paper}/>
                        </div>
                        <div>
                            <div class="clipText">
                                <img src={pointer}/>
                                <h1 style={{fontSize:"42px"}}>Convenience <br/> and control.</h1>
                                Clip allows you to share your files with small
                                URLS. Allow your files to be seen publicly or
                                password protected to secure files. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Donec ullamcorper suscipit luctus.
                            </div>
                            <img src={paper}/>
                        </div>
                    </div>
                </div>

                <div class="whyUseClip">
                    <h1 style={{textAlign:"center", paddingTop:"40px", fontSize:"42px"}}>Present your ideas with ease.</h1>
                    <div class="containerSpace">
                        <div class="presentIdeas">
                            <h1 class="demo1">Step 1</h1>
                            <p></p>
                            <h1>Upload your PDF, video, or Image</h1>
                        </div>
                        <div class="graySpace"></div>
                    </div>
                    <div class="containerSpace">
                        <div class="graySpace"></div>
                        <div class="presentIdeas">
                            <h1 class="demo1">Step 2</h1>
                            <p></p>
                            <h1>Customize your presentation</h1>
                        </div>
                    </div>
                    <div class="containerSpace">
                        <div class="presentIdeas">
                            <h1 class="demo1">Step 3</h1>
                            <p></p>
                            <h1>Share through a link or code!</h1>
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