// Import React and stylesheet
import React from "react";
import "./style.css";

// Input field to change the amount of users shown
function Amount(props) {
    return (
        <div className="col-3 d-inline">
            <input
            value={props.value}
            onChange={props.handleAmountChange}
            className="form-control mb-3" 
            type="number"
            min='1'
            max='100' 
            placeholder="# of Employees" 
            />
        </div>
    );
};

export default Amount;