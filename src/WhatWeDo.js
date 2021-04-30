import React, { Component } from 'react';
import './App.css';
import clipPaper from './images/ClipImage-02.png';
import paperClipRotate from './images/paperClipRotate.png';
import postItRotate from './images/postItRotate.png';
import faces from './images/faces.png';

class WhatWeDo extends Component {


    render() {
        return(
            <div>

            <div class="containerCenter">
                <div class="imageHolder" style={{marginTop:"50px"}}></div>
                <div style={{width:"550px", position:"relative"}}>
                    <div class="clipText" style={{maxWidth:"500px", marginLeft:"50px", top:"20%"}}>
                        <h1 style={{fontSize:"48px"}}>Present your ideas with confidence.</h1>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </div>
                    <img style={{width:"550px"}} src={clipPaper}/>
                </div>
            </div>
            <div class="containerCenter">
                <div>
                    <img style={{width:"600px"}} src={paperClipRotate}/>
                </div>
                <div class="WhatWeDoText" style={{position:"relative"}}>
                    <div class="purpleStripe"></div>
                    <h1>Clip exists as a platform for anyone.</h1>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                </div>
            </div>


            <div class="containerCenter">
                <div class="WhatWeDoText" style={{position:"relative"}}>
                    <div class="purpleStripe"></div>
                    <h1>Clip exists for every idea of any size.</h1>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                </div>
                <div>
                    <img style={{width:"600px"}} src={postItRotate}/>
                </div>
            </div>

            <div class="containerCenter" style={{marginBottom:"100px"}}>
                <div>
                    <img style={{width:"600px"}} src={faces}/>
                </div>
                <div class="WhatWeDoText" style={{position:"relative"}}>
                    <div class="purpleStripe"></div>
                    <h1>Meet the Faces behind Clip!</h1>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                </div>
            </div>

           </div>
        );
    }
} 

export default WhatWeDo;