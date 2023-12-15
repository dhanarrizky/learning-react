import React from "react";
import './style.css';

const FormControl = (porms) => {
    return (
        <div className="form-control">
            <input type={porms.typeInput} name={porms.nameInput} placeholder={porms.textContent}/>
        </div>
    )
}

export default FormControl;