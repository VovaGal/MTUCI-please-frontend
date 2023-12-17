import React from "react";

const Check = (props) => {
    return (
        <label className='checks'>
            <input type='checkbox'
                id={props.id}
                name={props.id}
                value="issues"
                checked={props.checked}
                onChange={props.onChange}
                error_code={props.error_code} />
        </label>
    )
}
export default Check;