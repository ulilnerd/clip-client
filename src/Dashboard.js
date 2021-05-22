import React, { Component } from 'react';
import './App.css';
import faces from './images/faces.png';

import redcircle from './images/redcircle.png';
import yellowcircle from './images/yellowcircle.png';
import greencircle from './images/greencircle.png';

import magGlass from './images/magGlass.png';

class Dashboard extends Component {

    render() {
        return(
            <div style={{display:"flex",position:"relative"}}>   
                <div class="profileNav">
                    <ul>
                        <a href="#" style={{color:"#4306FF",fontSize:"24px", fontWeight:"bold"}}>{sessionStorage.getItem("name")}</a>
                        <br/>
                        <br/>
                        <div class="imageHolder" style={{width:"200px", height:"200px"}}></div>
                        <br/>
                        <a href="#" class="dashboardList">Overview</a>
                        <br/>
                        <a href="/currentprojects" class="dashboardList">Current Projects</a>
                        <br/>
                        <a href="/publishedprojects" class="dashboardList">Published Projects</a>
                        <br/>
                        <a href="#" class="dashboardList">Shared Projects</a>
                        <br/>
                        <div style={{marginTop:"100px"}}>
                            <input style={{border:"none",borderBottom: "solid #4306FF 2px",backgroundColor:"rgb(237,231,255)",width:"175px"}} type="text" id="search" name="search"/><a href="#"><img src={magGlass} style={{width:"25px"}}/></a>
                            <br/>
                            <br/>
                            <a href="#" class="dashboardList">My Account + Settings</a>
                        </div>
                    </ul>
                </div>
                <div style={{marginLeft:"50px"}}>
                    <h1 style={{color:"#4306FF",fontSize:"24px", fontWeight:"bold"}}>Overview</h1>
                    <div style={{display:"flex",position:"relative"}}>   
                        <div class="imageHolder" style={{textAlign:"center"}}><i style={{fontWeight:'lighter',fontSize:"18px"}}>News + Features</i></div>
                        <div class="imageHolder" style={{width:"500px",height:"500px",marginLeft:"20px",textAlign:"center"}}><i style={{fontWeight:'lighter',fontSize:"18px"}}>Tips + Tricks</i></div>
                    </div>
                    <br/>
                    
                    <a href="#" style={{color:"#4306FF",fontSize:"24px", fontWeight:"bold"}}>Recent Projects</a>
                    <div class="projectPreview">
                        <div style={{display:"flex",position:"relative"}}> 
                            <br/>
                            <br/>
                            <div class="imageHolder" style={{width:"300px",height:"200px"}}>
                                <div class="imageHolderBar">
                                    <div style={{marginLeft:"2px", paddingTop:"5px"}}>
                                        <img src={greencircle} style={{width:"10px", height:"10px"}}/>
                                        <img src={yellowcircle} style={{width:"9px", margin:"0px 5px 0px 5px"}}/>
                                        <img src={redcircle} style={{width:"10px", height:"10px"}}/>
                                    </div>
                                </div>
                            </div>
                            <div class="imageHolder" style={{width:"300px",height:"200px",marginLeft:"20px"}}>
                                <div class="imageHolderBar">
                                    <div style={{marginLeft:"2px", paddingTop:"5px"}}>
                                        <img src={greencircle} style={{width:"10px", height:"10px"}}/>
                                        <img src={yellowcircle} style={{width:"9px", margin:"0px 5px 0px 5px"}}/>
                                        <img src={redcircle} style={{width:"10px", height:"10px"}}/>
                                    </div>
                                </div>
                            </div>
                            <div class="imageHolder" style={{width:"300px",height:"200px",marginLeft:"20px"}}>
                                <div class="imageHolderBar">
                                    <div style={{marginLeft:"2px", paddingTop:"5px"}}>
                                        <img src={greencircle} style={{width:"10px", height:"10px"}}/>
                                        <img src={yellowcircle} style={{width:"9px", margin:"0px 5px 0px 5px"}}/>
                                        <img src={redcircle} style={{width:"10px", height:"10px"}}/>
                                    </div>
                                </div>
                            </div>
                            <div class="imageHolder" style={{width:"300px",height:"200px",marginLeft:"20px"}}>
                                <div class="imageHolderBar">
                                    <div style={{marginLeft:"2px", paddingTop:"5px"}}>
                                        <img src={greencircle} style={{width:"10px", height:"10px"}}/>
                                        <img src={yellowcircle} style={{width:"9px", margin:"0px 5px 0px 5px"}}/>
                                        <img src={redcircle} style={{width:"10px", height:"10px"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:"flex",position:"relative",justifyContent:"space-evenly"}}>
                            <div class="recentProjText">
                                <br/>
                                Our Trip to Victoria <br/>
                                Last edit: Apr 26, 2021
                            </div>
                            <div class="recentProjText">
                                <br/>
                                Our Trip to Victoria <br/>
                                Last edit: Apr 26, 2021
                            </div>
                            <div class="recentProjText">
                                <br/>
                                Our Trip to Victoria <br/>
                                Last edit: Apr 26, 2021
                            </div>
                            <div class="recentProjText">
                                <br/>
                                Our Trip to Victoria <br/>
                                Last edit: Apr 26, 2021
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default Dashboard;