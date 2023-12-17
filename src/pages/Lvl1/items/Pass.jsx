import React, { useState, useEffect, useMemo, useContext } from 'react';
import './Pass.css';
import docInfo from '../../../api/docsPull';
import { DataContext } from '../../../funcs/DataContext';


const Pass = () => {

  const [isCheckedPic, setIsCheckedPic] = useState(false);
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);

  const { data, fetchData } = useContext(DataContext);
  // const [data, setData] = useState(() => {
  //   const localValue = localStorage.getItem("ITEMS")
  //   if (localValue == null) return []

  //   return JSON.parse(localValue)
  // })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await localStorage.getItem("ITEMS");
  //     setData(result);
  //   }
  //   fetchData();
  //   }, []);

  return (

    <div className='pass' >

      <div className='pPic'>
        <Check id='pPic' checked={isCheckedPic} onChange={handleOnChangePic => {
          setIsCheckedPic(!isCheckedPic);
        }} />
        {/* <div className="resultPass">
          checkbox is {isCheckedPic ? "checked" : "un-checked"}.
        </div> */}
      </div>

      <div className='pInfo'>
        {/* <div className='pSurname'>
          {data.surname}
        </div>
        <div className='pName'>
          {data.name}
        </div>
        <div className='pSecondN'>
          {data.middle_name}
        </div> */}
      </div>
      <Check id='pInfo' checked={isCheckedInfo} onChange={handleOnChangeInfo => {
        setIsCheckedInfo(!isCheckedInfo);
      }} />
      {/* <div className="resultPass">
        checkbox is {isCheckedInfo ? "checked" : "un-checked"}.
      </div> */}
    </div>
  )
}

const Check = (props) => {
  return (
    <label className='checks'>
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