import { useState, useContext } from 'react';
import { DataContext } from "../../../funcs/DataContext.jsx";

const Passport = () => {

  const { data } = useContext(DataContext);

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
            <div className='ppSurname'>
              {data.passport_surname}
            </div>
            <div className='ppName'>
              {data.passport_name}
            </div>
            <div className='ppSecondN'>
              {data.passport_middle_name}
            </div>

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