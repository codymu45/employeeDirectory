import React from 'react';

// Div to put in filtering buttons/functions
function FilterRow(props) {
return <div className="row justify-content-center">{props.children}</div>
};

export default FilterRow;