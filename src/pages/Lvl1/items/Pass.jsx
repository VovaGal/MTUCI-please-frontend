import { useState, useEffect, useContext } from 'react';
// import './Pass.css';
// import { saveDocs } from '../../../funcs/docsSave.jsx';
// import { saveDocs } from '../../../api/docsPull';

import { DataContext } from "../../../funcs/DataContext.jsx";


const Pass = () => {

  // const [stuff, setStuff] = useState(() => {
  //   const localValue = localStorage.getItem("ITEMS")
  //   if (localValue == null) return saveDocs()

  //   return JSON.parse(localValue)
  // })

  // useEffect(() => {
  //   localStorage.setItem("ITEMS", JSON.stringify(stuff))
  // }, [stuff])


  // const list = saveDocs()


  // console.log(list)
  // const { data } = useContext(dataContext);

  const { data } = useContext(DataContext);

  const [isCheckedPic, setIsCheckedPic] = useState(false);
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);

  return (
    <>
    <div className='pass' >

      <div className='pPic'>
        <Check id='pPic' checked={isCheckedPic} onChange={() => {
          setIsCheckedPic(!isCheckedPic);
        }} />
        <div className="resultPass">
          checkbox is {isCheckedPic ? "checked" : "un-checked"}.
        </div>
      </div>

      <div className='pInfo'>
        <div className='pSurname'>
          {data.surname}
        </div>
        <div className='pName'>
          {data.name}
        </div>
        <div className='pSecondN'>
          {data.middle_name}
        </div>
      </div>
      <Check id='pInfo' checked={isCheckedInfo} onChange={() => {
        setIsCheckedInfo(!isCheckedInfo);
      }} />
      <div className="resultPass">
        checkbox is {isCheckedInfo ? "checked" : "un-checked"}.
      </div>
    </div>
    </>
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