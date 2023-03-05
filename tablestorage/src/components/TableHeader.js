import React from "react";
import { Button } from "react-bootstrap";

function TableHeader({ displayRecords, filteredRecords }) {
  const sort = () => {};
  return (
    <>
      <thead>
        <tr>
          <th>#</th>
          <th>
            First Name{" "}
            <Button 
            <button
              onClick={(e) => {
                sort(e);
                console.log(e.target);
              }}
            >
              A
            </button>{" "}
            <button
              onClick={(e) => {
                sort(e);
                console.log(e.target);
              }}
            >
              D
            </button>
          </th>
          <th>Last Name </th>
          <th>Hero Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
