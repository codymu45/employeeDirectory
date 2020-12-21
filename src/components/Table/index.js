import React from 'react';

// Returning table 
function Table(props) {
    return (
        <div className="table-responsive">
            <table className="table">{props.children}</table>
        </div>
    );
};

export default Table;