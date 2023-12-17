import { useState, useEffect } from "react";
import "../pages/Lvl1/items/Pass.css";
import "../pages/Lvl1/items/Passport.css";
import "../pages/Lvl1/items/UniID.css";

import Pass from "../pages/Lvl1/items/Pass.jsx";
import Passport from "../pages/Lvl1/items/Passport.jsx";
import UniID from "../pages/Lvl1/items/UniID.jsx";
import Check from "../hooks/CheckboxProp.jsx";

export function PassPresence(props) {
    useEffect(() => {
        setIsCheckedPass(false);
      }, [props]);

    const [isCheckedPass, setIsCheckedPass] = useState(false);

    if (props.isPresent) {
        return <Pass />
    }
    return <Check id='passHere' checked={isCheckedPass} onChange={() => {
        setIsCheckedPass(!isCheckedPass);
    }} />
}

export function UniIDPresence(props) {
    useEffect(() => {
        setIsCheckedUniID(false);
      }, [props]);

    const [isCheckedUniID, setIsCheckedUniID] = useState(false);

    if (props.isPresent) {
        return <UniID />
    }
    return <Check id='uniIDHere' checked={isCheckedUniID} onChange={() => {
        setIsCheckedUniID(!isCheckedUniID);
    }} />
}

export function PassportPresence(props) {
    useEffect(() => {
        setIsCheckedPassport(false);
      }, [props]);

    const [isCheckedPassport, setIsCheckedPassport] = useState(false);

    if (props.isPresent) {
        return <Passport />
    }
    return <Check id='passportHere' checked={isCheckedPassport} onChange={() => {
        setIsCheckedPassport(!isCheckedPassport);
    }} />
}