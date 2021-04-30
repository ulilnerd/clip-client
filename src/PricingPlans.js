import React, { Component } from 'react';
import './App.css';
import featuredCommWork from './images/ClipImage-10.png';
import examplePic from './images/example.PNG';
import greenCheck from './images/greenCheck.png';

import bold from './images/bold.png';
import alignCenter from './images/align-center.png';
import font from './images/font.png';
import fill from './images/fill.png';

import redcircle from './images/redcircle.png';
import yellowcircle from './images/yellowcircle.png';
import greencircle from './images/greencircle.png';

class PricingPlans extends Component {


    render() {
        return(
           <div>
               <div class="containerCenter">
                    {/* <div style={{position:"relative"}}>
                        <h2 style={{position:"absolute",left:"10%"}}>Plan <b style={{color:"#4306FF"}}>&darr;</b></h2>
                        <img style={{width:"600px", height:"450px",position:"absolute",left:"20%",top:"20%"}} src={examplePic}/>
                        <img style={{width:"1000px", height:"700px"}} src={featuredCommWork}/>
                    </div> */}
                <h2 style={{position:"absolute",left:"15%"}}>Plan <b style={{color:"#4306FF"}}>&darr;</b></h2>
                <div class="imageHolder" style={{margin:"100px 50px 0px 0px"}}>
                    <div class="imageHolderBar">
                        <div style={{marginLeft:"15px", paddingTop:"5px"}}>
                            <img src={greencircle} style={{width:"20px", height:"20px"}}/>
                            <img src={yellowcircle} style={{width:"18px", margin:"0px 5px 0px 5px"}}/>
                            <img src={redcircle} style={{width:"20px", height:"20px"}}/>
                        </div>
                    </div>
                    <div style={{textAlign:"center",marginTop:"10px"}}>
                        <img style={{width:"600px", height:"450px"}} src={examplePic}/>
                    </div>
                    
                    {/* <div style={{fontWeight:"lighter", textAlign:"center", marginTop:"10px"}}><i>Featured community work</i></div> */}
                </div>


                    <div class="loginBox" style={{padding:"20px 50px 0px 50px"}}>
                        <h3 style={{color:"#4306FF"}}>Customize</h3>
                        <form style={{position:"relative"}}>
                                <div class="containerSpaceBetween">
                                    <div>
                                        <label for="title"><b style={{fontSize:"24px"}}>Title</b></label>
                                    </div>
                                    <div>
                                        <img src={font} style={{width:"25px",margin:"0px 5px 0px 5px"}}/> 
                                        <img src={bold} style={{width:"25px",margin:"0px 5px 0px 5px"}}/> 
                                        <img src={fill} style={{width:"25px",margin:"0px 5px 0px 5px"}}/> 
                                        <img src={alignCenter} style={{width:"25px",margin:"0px 5px 0px 5px"}}/> 
                                    </div>
                                </div>
                                <br/>
                                <textarea class="customizeInput" id="title" name="title" rows="4" cols="50" placeholder="Optional, Max. 50 Characters"/>
                                <br/>
                                <br/>
                                <div class="containerSpaceBetween">
                                    <div>
                                        <label for="customizeInput"><b style={{fontSize:"24px"}}>Customize</b></label>
                                    </div>
                                    <div>
                                        <img src={font} style={{width:"25px",margin:"0px 5px 0px 5px"}}/> 
                                        <img src={bold} style={{width:"25px",margin:"0px 5px 0px 5px"}}/> 
                                        <img src={fill} style={{width:"25px",margin:"0px 5px 0px 5px"}}/> 
                                        <img src={alignCenter} style={{width:"25px",margin:"0px 5px 0px 5px"}}/> 
                                    </div>
                                </div>
                                <br/>
                                <textarea class="customizeInput" id="caption" name="caption" rows="4" cols="50" placeholder="Optional, Max. 250 Characters"/>
                                <br/>
                                <br/>

                                <b style={{fontSize:"24px"}}>Background</b>
                                <div class="containerCenter">
                                    <div>
                                        <div style={{backgroundColor:"rgb(230,231,232)"}} class="backgroundButtons">Light Mode</div>
                                        <p></p>
                                        <div style={{backgroundColor:"rgb(67,6,255)", color:"white"}} class="backgroundButtons">Pattern &darr;</div>
                                    </div>
                                    <div>
                                    <div style={{backgroundColor:"rgb(53,52,52)", color:"white"}} class="backgroundButtons">Dark Mode</div>
                                        <p></p>
                                        <div style={{backgroundColor:"white", border:"solid black 1px"}} class="backgroundButtons">Custom</div>
                                    </div>
                                </div>
                            </form>
                    </div>
               </div>
                <p></p>
                <div class="containerCenter" style={{position:"absolute",left:"30%"}}>
                   <div class="loginBox" style={{width:"300px", height:"800px", margin:"0px 10px 0px 10px",padding:"0px 0px 0px 0px",textAlign:"center"}}>
                        Fans
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <h1 style={{position:"absolute",bottom:"5%",left:"35%"}}>FREE</h1>
                   </div>
                   <div class="loginBox" style={{width:"300px", height:"800px", margin:"0px 10px 0px 10px",padding:"0px 0px 0px 0px",textAlign:"center"}}>
                        Supporters
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <h1 style={{position:"absolute",bottom:"5%",left:"20%"}}>$10.00 CAD</h1>
                        <h2 style={{position:"absolute",bottom:"1%",left:"25%"}}>PER MONTH</h2>
                    
                   </div>
                   <div class="loginBox" style={{width:"300px", height:"800px", margin:"0px 10px 0px 10px",padding:"0px 0px 0px 0px",textAlign:"center"}}>
                        Skeptics +
                        <br/>
                        Non-committals
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <br/>
                        <br/>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <p></p>
                        <img style={{width:"30px"}} src={greenCheck}/>
                        <h1 style={{position:"absolute",bottom:"5%",left:"25%"}}>$5.00 CAD</h1>
                        <h2 style={{position:"absolute",bottom:"1%",left:"8%"}}>PER UPLOAD UPGRADE</h2>
                   </div>
               </div>
                <div style={{minHeight:"150px"}}></div>
               <div class="purpleCell">Unlimited Uploads</div>
               <div class="whiteCell">Customize with Titles, Captions, Light and Dark Mode</div>
               <div class="purpleCell"></div>
               <div class="whiteCell"></div>
               <div class="purpleCell"></div>
               <div class="whiteCell"></div>
               <div class="purpleCell"></div>

               <div class="whiteCell">Customize backgrounds with pattersn and gradients</div>
               <div class="purpleCell">Custom Domain</div>
               <div class="whiteCell">Link Expiry</div>
               <div class="purpleCell">Password Protection</div>
               
               
               <div style={{minHeight:"300px"}}></div>
           </div>
        );
    }
} 

export default PricingPlans;