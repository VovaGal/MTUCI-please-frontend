import React, { useState, useEffect } from 'react';
import './UniID.css';

const UniID = () => {

  // const stuff = saveDocs();

    const [isCheckedDate, setIsCheckedDate] = useState(false);
    const [isCheckedPic, setIsCheckedPic] = useState(false);
    const [isCheckedInfo, setIsCheckedInfo] = useState(false);
    

    return (
        <div className='uniID'>

          <div className='secPage'>
            <div className='idPic'>
              <Check id='idPic' checked={isCheckedPic} onChange={handleOnChangePic => {
                setIsCheckedPic(!isCheckedPic);
              }} />
              {/* <div className="resultUniID">
                checkbox is {isCheckedPic ? "checked" : "un-checked"}.
              </div> */}
            </div>
    
            <div className='idInfo'>
              <div>
                <div className='idName'>
                  Name
                </div>
              </div>
              <Check id='idInfo' checked={isCheckedInfo} onChange={handleOnChangeInfo => {
                setIsCheckedInfo(!isCheckedInfo);
              }} />
              {/* <div className="resultUniID">
                checkbox is {isCheckedInfo ? "checked" : "un-checked"}.
              </div> */}
            </div>
          </div>
              
          <div className='idDate'>
            Date
            <Check id='idDate' checked={isCheckedDate} onChange={handleOnChangeDate => {
              setIsCheckedDate(!isCheckedDate);
            }} />
    
            {/* <div className="resultUniID">
              checkbox is {isCheckedDate ? "checked" : "un-checked"}.
            </div> */}
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
export default UniID;



