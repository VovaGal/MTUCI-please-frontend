import React from "react";
import "../pages/Lvl1/items/Pass.css";
import "../pages/Lvl1/items/Passport.css";
import "../pages/Lvl1/items/UniID.css";

import Pass from "../pages/Lvl1/items/Pass.jsx";
import Passport from "../pages/Lvl1/items/Passport.jsx";
import UniID from "../pages/Lvl1/items/UniID.jsx";



export function PassPresence(props) {
    if(props.isPresent) {
        return <Pass />
    }
    return <input className='passHere' type='checkbox' />
}

export function UniIDPresence(props) {
    if(props.isPresent) {
        return <UniID />
    }
    return <h1> null </ h1>
}

export function PassportPresence(props) {
    if(props.isPresent) {
        return <Passport />
    }
    return <h1> null </ h1>
}