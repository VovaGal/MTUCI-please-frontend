import React from 'react';
import './UniID.css';


const UniID = () => {

    const [isCheckedUniID, setIsCheckedUniID] = useState(false);
    const handleOnChangeUniID = () => {
        setIsCheckedUniID(!isCheckedUniID); 
    };
    
    return (
        <div className='uniID'>
            <label className='uniIDCheck'>
                <input type='checkbox'
                    id="uniID"
                    name="uniID"
                    value="issues"
                    checked={isCheckedUniID}
                    onChange={handleOnChangeUniID} />
            </label>
            <div className="resultUniID">
                checkbox is {isCheckedUniID ? "checked" : "un-checked"}.
            </div>
        </div>
    )
}

export default UniID;



