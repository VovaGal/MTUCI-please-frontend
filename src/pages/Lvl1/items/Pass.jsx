import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import './Pass.css';

const Pass = () => {

    const [isCheckedPic, setIsCheckedPic] = useState(false);
    const [isCheckedInfo, setIsCheckedInfo] = useState(false);
  
    return (
      <div className='pass' >
  
  <div className='pPic'>
            <Check id='pPic' checked={isCheckedPic} onChange={handleOnChangePic => {
              setIsCheckedPic(!isCheckedPic);
            }} />
            <div className="resultPass">
              checkbox is {isCheckedPic ? "checked" : "un-checked"}.
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
        <Check id='pInfo' checked={isCheckedInfo} onChange={handleOnChangeInfo => {
              setIsCheckedInfo(!isCheckedInfo);
            }} />
            <div className="resultPass">
              checkbox is {isCheckedInfo ? "checked" : "un-checked"}.
            </div>
      </div>
    )
}
const Check = (props) => {
    return (
      <label className='passCheck'>
        <input type='checkbox'
          id={props.id}
          name={props.id}
          value="issues"
          checked={props.checked}
          onChange={props.onChange} />
      </label>
    )
}  

export default Pass;