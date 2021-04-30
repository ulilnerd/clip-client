import React, { Component } from 'react';

import Hamburger from './images/hamburger.PNG';
import samplePic from './images/samplepic.PNG';
import blueHam from './images/blueClipHam.PNG';
import paper from './images/Paper-05.png';
import medal from './images/medal.PNG';
import glass from './images/glass.PNG';
import pointer from './images/pointer.PNG';
import quoteBox from './images/ClipImage-03.png';
import clipPaper from './images/ClipImage-02.png';

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
                <div class="firstBlock">
                    <div class="blueBlock"></div>
                    
                    <div class="containerCenter">
                        <div style={{width:"550px", position:"relative"}}>
                            <div class="clipText" style={{maxWidth:"500px", marginLeft:"50px", top:"20%"}}>
                                <h1 style={{fontSize:"48px"}}>Present your ideas with confidence.</h1>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </div>
                            <img style={{width:"550px"}} src={clipPaper}/>
                        </div>
                        <div style={{position:"relative"}}>
                            <div class="whiteSpace"></div>
                            <button type="button" style={{width:"300px", height: "75px", position:"absolute", left:"55%", bottom:"30%", backgroundColor:"white", borderRadius: "6px", borderColor:"black", borderWidth:"3px", boxShadow:"6px 6px lightgreen, 6px 6px 0 2px black"}}><a href="#" style={{fontWeight:"bold", fontSize:"32px"}}>Upload!</a></button>
                            <p></p>
                            <div class="clipCode">
                                <div style={{fontWeight:"bold", fontSize:"32px", marginLeft:"5px", display:"inline-block"}}>Clip Code:</div>
                                <input style={{border:"none", marginLeft: "10px"}} type="text" id="code" name="code"/>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div class="newSection">
                    {/* <h1 style={{textAlign:"center", fontSize:"42px"}}>What is Clip?</h1> */}
                    <div class="containerCenter" style={{marginBottom:"50px"}}>
                        <div style={{position:"relative"}}>
                            <div class="clipText">
                                <img src={medal} style={{marginLeft:"140px"}}/>
                                <h1 style={{fontSize:"42px"}}>Share your ideas in full quality.</h1>
                                Clip allows you to upload your files up to
                                100mbs without compression. Never compro-
                                mise quality over convenience ever again
                                Lorem ipsum dolor sit amet, consectetur adip-
                                iscing elit. Donec ullamcorper suscipit luctus.
                                Sed nec purus viverra, fermentum ex a, volut-
                                pat nunc.
                            </div>
                            <img src={paper} style={{width:"450px"}}/>
                        </div>
                        <div style={{position:"relative"}}>
                            <div class="clipText">
                                <img src={glass} style={{marginLeft:"140px"}}/>
                                <h1 style={{fontSize:"42px"}}>Be clear and <br/> Concise.</h1>
                                Clip allows you to present your ideas on a
                                plane background without other third-party
                                interfaces. Lorem ipsum dolor sit amet, con-
                                sectetur adipiscing elit. Donec ullamcorper ul-
                                lamcorper ullamcorper suscipit luctus.
                            </div>
                            <img src={paper} style={{width:"450px"}}/>
                        </div>
                        <div style={{position:"relative"}}>
                            <div class="clipText">
                                <img src={pointer} style={{marginLeft:"140px"}}/>
                                <h1 style={{fontSize:"42px"}}>Convenience <br/> and control.</h1>
                                Clip allows you to share your files with small
                                URLS. Allow your files to be seen publicly or
                                password protected to secure files. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Donec ullamcorper suscipit luctus.
                            </div>
                            <img src={paper} style={{width:"450px"}}/>
                        </div>
                    </div>
                </div>

                <div class="newSection">
                    
                    <h1 style={{textAlign:"center", paddingTop:"40px", fontSize:"42px"}}>Present your ideas with ease.</h1>
                    <div class="containerCenter" style={{backgroundColor:"rgb(230,231,232)"}}>
                        <div>
                            <div class="squareBoxSmall">
                                <div class="bigBlueNum">1</div>
                                <h1>Upload</h1>
                            </div>
                            <p></p>
                            <div class="squareBoxSmall">
                            <div class="bigBlueNum">2</div>
                                <h1>Customize</h1>
                            </div>
                            <p></p>
                            <div class="squareBoxSmall">
                                <div class="bigBlueNum">3</div>
                                <h1>Present!</h1>
                            </div>
                        </div>
                        <div style={{position:"relative"}}>
                            <div class="squareBoxLarge">
                                <div class="boxLargeText">
                                    <h1 style={{color:"blue", fontWeight:"lighter"}}>Step 1</h1>
                                    <h1>Upload your PDF, Video, or Image.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="newSection">
                    <h1 class="communityReviews">A few words from our community</h1>
                    <div class="containerCenter">
                        <div style={{width:"600px", height:"500px", position:"relative"}}>
                            <div class="communityText">
                                <i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis vel illum facilisis at vero <br/><br/>- Tina, Facebook Sr. Designer</i>
                            </div>
                            <img style={{width:"700px", height:"500px"}} src={quoteBox}/>
                        </div>
                        <div style={{width:"600px", height:"500px", position:"relative"}}>
                            <div class="communityText">
                                <i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis vel illum facilisis at vero <br/><br/>- Pam, Google Sr. Designer</i>
                            </div>
                            <img style={{width:"700px", height:"500px"}} src={quoteBox}/>
                        </div>
                    </div>
                </div>
                

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