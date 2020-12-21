// Import React and stylesheet
import React from "react";
import "./style.css";

// Input field to search for users individually or by name
function Searchbar(props) {
    return (
        <div className="col-6 d-inline">
            <input
            value={props.value}
            onChange={props.handleInputChange}
            className="form-control mb-3" 
            type="text" 
            placeholder="Enter Name" 
            />
        </div>
    );
};

export default Searchbar;