import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import './Passport.css';

const Passport = () => {

    // const [isCheckedDate, setIsCheckedDate] = useState(false);
    const [isCheckedPic, setIsCheckedPic] = useState(false);
    const [isCheckedInfo, setIsCheckedInfo] = useState(false);
  
    return (
      <div className='passport'>
  
        {/* <div className='ppDate'>
          Date
          <Check id='ppDate' checked={isCheckedDate} onChange={handleOnChangeDate => {
            setIsCheckedDate(!isCheckedDate);
          }} />
  
          <div className="resultPassport">
            checkbox is {isCheckedDate ? "checked" : "un-checked"}.
          </div>
        </div> */}
  
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

export default Passport;