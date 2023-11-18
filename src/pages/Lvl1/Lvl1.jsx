import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import {approvedCall, deniedCall} from "../../funcs/Refresh.jsx";
import './lvl1.css';

import './items/Pass.css';
import './items/Passport.css';
import './items/UniID.css';
import { handleOnChangePassport } from '../../funcs/Checks.jsx';

// import Pass from './items/Pass.jsx';
// const Pass = lazy (() => import('./items/Pass'))

// import Passport from './items/Passport.jsx';
// import UniID from './items/UniID.jsx';


export default function Lvl1() {

    const [points, setPoints] = useState(0);
    const handleCounter = () => {
      setPoints(points + 1)
    }
  
    return (
    <>
    <div className='game'>
  
  
      <div className='header'>
        <div className='calendar'> 18.10.2023 </div>
        <p>{points}</p>
      </div>
  
  
      <div className='gameArea'>
  
  
        <div className='window'>
          <div className='person'></div>
        </div>
  
        <div className='table'>
  
          <div className='docs'>
            <Pass />
            <Passport />
            {/* <UniID />*/}
          </div>
  
          
          <div className='buttons'>
            <button className='btnY' onClick={() => {handleCounter(); approvedCall();}}>Approve</button>
            <button className='btnN'
            // onClick={(isCheckedUniID || isCheckedPassport) ? deniedCall : "none selected"}
            >Deny
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  } 
  
const Pass = () => {

  const [isCheckedPass, setIsCheckedPass] = useState(false);
  const handleOnChangePass = () => {
    setIsCheckedPass(!isCheckedPass);
  };

  return (
    <div className='pass' >

      <div className='pPic'>
        <label className='passCheck'>
          <input type='checkbox'
            id="pass"
            name="pass"
            value="issues"
            checked={isCheckedPass}
            onChange={handleOnChangePass} />
        </label>
        <div className="resultPass">
          checkbox is {isCheckedPass ? "checked" : "un-checked"}.
        </div>
      </div>

      <div className='pInfo'>
        <div className='pName'>
          Name
        </div>
        <div className='pSecondN'>
          Second Name
        </div>
        <div className='pSurname'>
          Surname
        </div>
      </div>
    </div>
  )
}


const Passport = () => {

  const [isCheckedDate, setIsCheckedDate] = useState(false);
  const [isCheckedPic, setIsCheckedPic] = useState(false);
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);

  return (
    <div className='passport'>

      <div className='ppDate'>
        Date
        <Check id='ppDate' checked={isCheckedDate} onChange={handleOnChangeDate => {
          setIsCheckedDate(!isCheckedDate);
        }} />

        <div className="resultPassport">
          checkbox is {isCheckedDate ? "checked" : "un-checked"}.
        </div>
      </div>

      <div className='secPage'>
        <div className='ppPic'>
          <Check id='ppPic' checked={isCheckedPic} onChange={handleOnChangePic => {
            setIsCheckedPic(!isCheckedPic);
          }} />
          <div className="resultPassport">
            checkbox is {isCheckedPic ? "checked" : "un-checked"}.
          </div>
        </div>

        <div className='ppInfo'>

          <div>
            <div className='ppName'>
              Name
            </div>
            <div className='ppSecondN'>
              Second Name
            </div>
            <div className='ppSurname'>
              Surname
            </div>
          </div>
          <Check id='ppInfo' checked={isCheckedInfo} onChange={handleOnChangeInfo => {
            setIsCheckedInfo(!isCheckedInfo);
          }} />
          <div className="resultPassport">
            checkbox is {isCheckedInfo ? "checked" : "un-checked"}.
          </div>
        </div>
      </div>
    </div>
  )
}

const Check = (props) => {
  return (
    <label className='passportCheck'>
      <input type='checkbox'
        id={props.id}
        name={props.id}
        value="issues"
        checked={props.checked}
        onChange={props.onChange} />
    </label>
  )
}




const UniID = () => {

  const [isCheckedUniID, setIsCheckedUniID] = useState(false);
  const handleOnChangeUniID = () => {
      setIsCheckedUniID(!isCheckedUniID); 
  };
  
  return (
      <div className='uniID'>
          <label className='uniIDCheck'>
              <input type='checkbox'
                  id="uniID"
                  name="uniID"
                  value="issues"
                  checked={isCheckedUniID}
                  onChange={handleOnChangeUniID} />
          </label>
          <div className="resultUniID">
              checkbox is {isCheckedUniID ? "checked" : "un-checked"}.
          </div>
      </div>
  )
}