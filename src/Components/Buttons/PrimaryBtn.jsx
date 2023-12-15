import React from "react";
import './style.css';

const PrimaryBtn = (porms) => {
    return (
        <div className="btn-primary">
            <button>{porms.textContent}</button>
        </div>
    )
}

export default PrimaryBtn;