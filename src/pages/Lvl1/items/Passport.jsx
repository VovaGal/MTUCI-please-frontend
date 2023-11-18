import React from 'react';
import './Passport.css';

const Passport = () => {

    const [isCheckedPassport, setIsCheckedPassport] = useState(false);
    const handleOnChangePassport = () => {
      setIsCheckedPassport(!isCheckedPassport); 
    };

    return (
        <div className='passport'>
            <label className='passportCheck'>
                <input type='checkbox'
                    id="passport"
                    name="passport"
                    value="issues"
                    checked={isCheckedPassport}
                    onChange={handleOnChangePassport} />
            </label>
            <div className="resultPassport">
                checkbox is {isCheckedPassport ? "checked" : "un-checked"}.
            </div>
        </div>
    )
}

export default Passport;