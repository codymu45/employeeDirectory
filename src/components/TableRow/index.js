import React from 'react';
import './style.css';

// Items for each user in their row
function TableRow(props) {
    return (
        <tr>
            <td>
                <img alt={props.name} src={props.picture}></img>
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );
};

export default TableRow;