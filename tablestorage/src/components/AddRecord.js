import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
// import  from "react-bootstrap/Button";
// import  from "react-bootstrap/Form";
// state lifted up

function AddRecord({ show, setShow, records, setRecords }) {
  const tempObj = {
    id: 0,
    Fname: "",
    Lname: "",
    heroName: "",
    email: "",
    gender: "M",
    age: 20,
  };
  const [userDetails, setUserDetails] = useState(() => tempObj);
  const onSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, userDetails]);
    console.log(records[0]);
    handleClose();
  };
  const handleClose = () => setShow(false); //e.preventdefault to avoid refresh
  function handleChange(e) {
    const { name, value } = e.target;
    //key "": value, [key]
    setUserDetails({ ...userDetails, [name]: value });
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
                type="name"
                name="userFName"
                placeholder="Steve"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                name="userLName"
                placeholder="Rogers"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              <Form.Label>Hero Name</Form.Label>
              <Form.Control
                type="name"
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
                type="gender"
                name="userGender"
                placeholder="M"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddRecord;
