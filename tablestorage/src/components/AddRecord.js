import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
// import  from "react-bootstrap/Button";
// import  from "react-bootstrap/Form";
// state lifted up

function AddRecord({ show, setShow, records, setRecords }) {
  const tempObj = {
    id: (records.length && records.at(-1).id + 1) || 0,
    userFName: "",
    userLName: "",
    userHeroName: "",
    userEmail: "",
    userGender: "",
    userAge: 0,
  };
  const [userDetails, setUserDetails] = useState(() => tempObj);
  const [errorBoolean, setErrorBoolean] = useState(false);
  const [error, setError] = useState({
    userFName: "",
    userLName: "",
    userHeroName: "",
    userEmail: "",
    userGender: "",
    userAge: "",
  });

  const handleClose = () => setShow(false); //e.preventdefault to avoid refresh

  //arrow over normal
  // const checkValidation = () => {
  //   const arrKeyVal = Object.entries(userDetails);
  //   const filteredArr = arrKeyVal.filter(arr => {(arr[1]== "")})
  //   console.log(filteredArr,arrKeyVal)
  //   filteredArr.map(arr=>{
  //     setError({...error, [arr[0]]:"Please enter a value"})
  //     console.log(arr)
  //   })
  // }

  function onSubmit(e) {
    e.preventDefault();
    setRecords([...records, userDetails]);
    setUserDetails({});
    handleClose();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    //key "": value, [key]
    // (value) ? null: <></>
    setUserDetails({ ...userDetails, [name]: value });

    // userDetails
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Input1">
              <Form.Label className="">First Name</Form.Label>
              <Form.Control
                type="text"
                name="userFName"
                placeholder="Steve"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              {error["userFName"] && <p>{error["userFName"]}</p>}
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="userLName"
                placeholder="Rogers"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              <Form.Label>Hero Name</Form.Label>
              <Form.Control
                type="text"
                name="userHeroName"
                placeholder="Captain America"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                placeholder="name@example.com"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                name="userGender"
                placeholder="M"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              {/* <div key={`inline-${type}`} className="mb-3"></div>
                <Form.Check
                  inline
                  label="Female"
                  name="female"
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  inline
                  label="Male"
                  name="male"
                  type="radio"
                  id={`inline-radio-2`}
                />
                </div> */}
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="userAge"
                placeholder="25"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Add Record
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddRecord;
