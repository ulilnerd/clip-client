import React, { Component } from 'react';
import './App.css';

import clipGray from './images/clipWhite.png';

class Footer extends Component {


    render() {
        return(
            <footer>
                <div class="footerContents">
                    <a href="/"><img style={{height:"100px", width:"250px"}} src={clipGray}/></a>
                    <p></p>
                    <b>SUPPORT</b>
                    <p></p>
                    <div class="containerFooter">
                        <div class="footerLinks">
                            <a class="footerLink"href="/">What is CLiP?</a>
                            <br/>
                            <a class="footerLink" href="/">subscription + pricing</a>
                            <br/>
                            <a class="footerLink" href="/">submit a suggestion</a>
                            <br/>
                            <a class="footerLink" href="/">FAQ</a>
                        </div>
                        <div class="footerLinks">
                            <a class="footerLink" href="/">our history</a>
                            <br/>
                            <a class="footerLink" href="/">meet the team</a>
                            <br/>
                            <a class="footerLink" href="/">careers</a>
                            <br/>
                            <a class="footerLink" href="/">contact us</a>
                        </div>
                        <div class="newsletterForm">
                            <form>
                                <input class="footerInput" type="text" id="email" name="email"/>
                            </form>
                            <a class="footerLink" href="/" style={{marginLeft:"75px"}}>join our newsletter for the latest updates</a>
                            <p style={{marginTop:"50px", marginLeft:"75px"}}>copyright 2021 CLIP. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;