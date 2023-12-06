import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import { approvedCall, deniedCall } from "../../funcs/Refresh.jsx";
import './lvl1.css';

import './items/Pass.css';
import './items/Passport.css';
import './items/UniID.css';
import { handleOnChangePassport } from '../../funcs/Checks.jsx';

import Pass from './items/Pass.jsx';
import Passport from './items/Passport.jsx';
import UniID from './items/UniID.jsx';


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
              <div className='ps'>
                <Pass />
              </div>
              <div className='id'>
                <UniID />
              </div>
              <div className='psp'>
                <Passport />
              </div>
            </div>

            <div className='buttons'>
              <button className='btnY' onClick={() => { handleCounter(); approvedCall(); }}>Approve</button>
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








