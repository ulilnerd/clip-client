import React, { Component } from 'react';
import './App.css';

import clipGray from './images/clipGray.PNG';

class Footer extends Component {


    render() {
        return(
            <footer>
                <div class="footerContents">
                    <a href="/"><img style={{height:"100px", width:"250px"}} src={clipGray}/></a>
                    <p></p>
                    <b>SUPPORT</b>
                    <p></p>
                    <div class="container">
                        <div class="footerLinks">
                            <a href="/">What is CLiP?</a>
                            <br/>
                            <a href="/">subscription + pricing</a>
                            <br/>
                            <a href="/">submit a suggestion</a>
                            <br/>
                            <a href="/">FAQ</a>
                        </div>
                        <div class="footerLinks">
                            <a href="/">our history</a>
                            <br/>
                            <a href="/">meet the team</a>
                            <br/>
                            <a href="/">careers</a>
                            <br/>
                            <a href="/">contact us</a>
                        </div>
                        <div class="newsletterForm">
                            <form>
                                <input type="text" id="email" name="email"/>
                            </form>
                            <a href="/" style={{marginLeft:"75px"}}>join our newsletter for the latest updates</a>
                            <p style={{marginTop:"50px", marginLeft:"75px"}}>copyright 2021 CLIP. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;