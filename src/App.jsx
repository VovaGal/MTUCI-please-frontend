import { useState, useEffect } from 'react';
import './App.css';
import React, { Component } from 'react';

 

export default function App() {

  const [isCheckedPass, setIsCheckedPass] = useState(false);
  const handleOnChangePass = () => {
    setIsCheckedPass(!isCheckedPass); 
  }; /// pass

  const [isCheckedUniID, setIsCheckedUniID] = useState(false);
  const handleOnChangeUniID = () => {
    setIsCheckedUniID(!isCheckedUniID); 
  }; /// uniID

  const [isCheckedPassport, setIsCheckedPassport] = useState(false);
  const handleOnChangePassport = () => {
    setIsCheckedPassport(!isCheckedPassport); 
  }; /// passport

  function approvedCall() {
    window.location.reload(false);

  }; /// approve page refresh

  function deniedCall() {
    window.location.reload(false);
  }; /// approve page refresh



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
          

          <div className='pass' >
          <label className='passCheck'>
            <input type='checkbox' 
            id="pass" 
            name="pass" 
            value="issues"
            checked={isCheckedPass}
            onChange={handleOnChangePass}/>
          </label>
          <div className="resultPass">
            checkbox is {isCheckedPass ? "checked" : "un-checked"}.
          </div>          
          </div>


          <div className='uniID'>
          <label className='uniIDCheck'> 
            <input type='checkbox' 
            id= "uniID"
            name="uniID" 
            value="issues"
            checked={isCheckedUniID}
            onChange={handleOnChangeUniID}/>
          </label>
          <div className="resultUniID">
            checkbox is {isCheckedUniID ? "checked" : "un-checked"}.
          </div>          
          </div>


          <div className='passport'>
          <label className='passportCheck'>
            <input type='checkbox' 
            id="passport" 
            name="passport" 
            value="issues"
            checked={isCheckedPassport}
            onChange={handleOnChangePassport}/>       
          </label>
          <div className="resultPassport">
            checkbox is {isCheckedPassport ? "checked" : "un-checked"}.
          </div>
          </div>
        </div>

        
        <div className='buttons'>
          <button className='btnY' onClick={() => {handleCounter(); approvedCall();}}>Approve</button>
          <button className='btnN'
          onClick={(isCheckedUniID || isCheckedPassport) ? deniedCall : "none selected"}
          >Deny
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
} 
