import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
function UserTable({records, setRecords}) {

  return (
    <div className="mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Hero Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
        
        {records.map((oneRecord, id)=>{
          return (
            <tr key={id}>
            <td>
              <Form.Check
              inline
              label={id}
              name={`group ${id}`}
              type="checkbox"
              id={`inline-checkbox-${id}`}
              />
            </td>
            <td>{oneRecord.userFName}</td>
            <td>{oneRecord.userLName}</td>
            <td>{oneRecord.userHeroName}</td>
            <td>{oneRecord.userEmail}</td>
            <td>{oneRecord.userGender}</td>
            <td>{oneRecord.userAge}</td>
            </tr>
          );
        })}

        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
