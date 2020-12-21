// Importing react and stylesheet
import React from 'react';
import './style.css';

// Headers for each column
function TableHeader() {
  return (
    <thead>
      <tr>
        <th scope="col">Picture</th>
        <th scope="col">Name</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Email</th>
        <th scope="col">Date of Birth</th>
      </tr>
    </thead>
  );
};

export default TableHeader;