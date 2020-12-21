// Import React and stylesheet
import React from "react";
import "./style.css";

// Button to sort users by last name 
function SortBtn(props) {
    return (
        <div className="col-3 d-inline">
            <div className="btn btn-primary" onClick={props.changeButtonText}>{props.text}</div>
        </div>
    );
};

export default SortBtn;