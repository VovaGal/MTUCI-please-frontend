import React, { useState, useEffect } from 'react';
import './Passport.css';
// import { saveDocs } from '../../../funcs/docsSave.jsx';

const Passport = () => {

  // const list = saveDocs();

  const [isCheckedPic, setIsCheckedPic] = useState(false);
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);

  return (
    <div className='passport'>

      <div className='secPage'>
        <div className='ppPic'>
          <Check id='ppPic' checked={isCheckedPic} onChange={handleOnChangePic => {
            setIsCheckedPic(!isCheckedPic);
          }} />
          {/* <div className="resultPassport">
              checkbox is {isCheckedPic ? "checked" : "un-checked"}.
            </div> */}
        </div>

        <div className='ppInfo'>
          <div>
            {/* <div className='ppSurname'>
              {list.passport_surname}
            </div>
            <div className='ppName'>
              {stuff.passport_name}
            </div>
            <div className='ppSecondN'>
              {stuff.passport_middle_name}
            </div> */}

          </div>
          <Check id='ppInfo' checked={isCheckedInfo} onChange={handleOnChangeInfo => {
            setIsCheckedInfo(!isCheckedInfo);
          }} />
          {/* <div className="resultPassport">
              checkbox is {isCheckedInfo ? "checked" : "un-checked"}.
            </div> */}
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