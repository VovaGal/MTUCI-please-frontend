import React from 'react';
import './Pass.css';

const Pass = () => {

    const [isCheckedPass, setIsCheckedPass] = useState(false);
    const handleOnChangePass = () => {
      setIsCheckedPass(!isCheckedPass); 
    };

    return (
        <div className='pass' >
            <label className='passCheck'>
                <input type='checkbox'
                    id="pass"
                    name="pass"
                    value="issues"
                    checked={isCheckedPass}
                    onChange={handleOnChangePass} />
            </label>
            <div className="resultPass">
                checkbox is {isCheckedPass ? "checked" : "un-checked"}.
            </div>
        </div>      
    )  
}

export default Pass;