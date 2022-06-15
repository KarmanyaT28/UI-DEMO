import React from 'react';

import "./Landing.css";
import profiles from "../../data/profiles/profiles.json";
import {Profile } from "../../models/profile/Profile";

export default function Landing(){
    return <div className="landing-container">
        <img className="logo" src="assets/images/Optum-logo.png"/>
        <div className="content">
            <span className="title">Scenarios</span>
            <div className="profiles">
                {profiles.map((profile,index)=>(
                        <div className="profile">
                        <img className="image" src={profile.image_src}/>
                        <span className="scenario">{profile.username}</span>
                    </div>
                ))}
            </div>
            <button>Manage Scenarios</button>
        </div>
    </div>
}