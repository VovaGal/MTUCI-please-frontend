import { useState, useEffect, useContext } from 'react';
import { DataContext } from "../../../funcs/DataContext.jsx";
import Check from '../../../hooks/CheckboxProp.jsx';

const UniID = () => {

  const { data } = useContext(DataContext);

  const [isCheckedDate, setIsCheckedDate] = useState(false);
  const [isCheckedPic, setIsCheckedPic] = useState(false);
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);

  useEffect(() => {
    setIsCheckedPic(false);
    setIsCheckedInfo(false);
  }, [data]);

  return (
    <div className='uniID'>

      <div className='secPage'>
        <div className='idPic' style={{ backgroundImage: `url('${data.student_id_photo}')`, backgroundSize: "cover" }}>
          <Check id='idPic' checked={isCheckedPic} onChange={handleOnChangePic => {
            setIsCheckedPic(!isCheckedPic);
          }} />
          {/* <div className="resultUniID">
                checkbox is {isCheckedPic ? "checked" : "un-checked"}.
              </div> */}
        </div>

        <div className='idInfo'>
          <div>
            <div className='idSurname'>
              {data.student_id_surname}
            </div>
            <div className='idName'>
              {data.student_id_name}
            </div>
            <div className='idSecondN'>
              {data.student_id_middle_name}
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
        {data.student_id_date}
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

export default UniID;



