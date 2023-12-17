import { useState, useEffect, useContext } from 'react';
import { DataContext } from "../../../funcs/DataContext.jsx";
import Check from '../../../hooks/CheckboxProp.jsx';


const Pass = () => {

  const { data } = useContext(DataContext);

  const [isCheckedPic, setIsCheckedPic] = useState(false);
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);

  useEffect(() => {
    setIsCheckedPic(false);
    setIsCheckedInfo(false);
  }, [data]);

  return (
    <>
      <div className='pass' >

        <div className='pPic'>
          <Check id='pPic' checked={isCheckedPic} onChange={() => {
            setIsCheckedPic(!isCheckedPic);
          }} />
          {/* <div className="resultPass">
          checkbox is {isCheckedPic ? "checked" : "un-checked"}.
        </div> */}
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
        {/* <div className="resultPass">
        checkbox is {isCheckedInfo ? "checked" : "un-checked"}.
      </div> */}
      </div>
    </>
  )
}

export default Pass;