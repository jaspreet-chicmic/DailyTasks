import React, { useEffect, useState } from "react";
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
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState({});

  // useEffect(() => {
  //   console.log(error);
  //   if (Object.keys(error).length === 0 && isSubmit) {
  //     console.log(userDetails);
  //   }
  // }, [error]);

  const handleClose = () => setShow(false); //e.preventdefault to avoid refresh

  //arrow over normal
  const checkValidation = (userDetails) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexName = /^[a-z ,.'-]+$/i;
    const regexHero = /[^A-Za-z0-9]+/;
    const errors = {};
    if (!userDetails.userFName) {
      errors.userFName = "First name must be provided!";
    } else if (!regexName.test(userDetails.userFName))
      errors.userFName = "Invalid!";

    if (!userDetails.userLName) {
      errors.userLName = "Last name must be provided";
    } else if (!regexName.test(userDetails.userLName))
      errors.userLName = "Invalid!";

    if (!userDetails.userHeroName)
      errors.userHeroName = "Hero Name must be provided";
    // } else if (!regexHero.test(userDetails.userHeroName))
    //   errors.userHeroName = "Invalid!";

    if (!userDetails.userEmail) {
      errors.userEmail = "Email must be provided";
    } else if (!regexEmail.test(userDetails.userEmail)) {
      errors.userEmail = "This is not a valid email format!";
    }
    if (!userDetails.userGender) {
      errors.userGender = "Gender name must be provided";
    }
    if (!userDetails.userAge) {
      errors.userAge = "Age must be provided";
    }else if(userDetails.userAge >= 200 || userDetails.userAge < 0)
      errors.userAge = "Invalid!";
    return errors;
  };

  function onSubmit(e) {
    e.preventDefault();
    const errs = checkValidation(userDetails);
    setError(errs);
    console.log("errs ", errs);
    setIsSubmit(true);
    if (!Object.keys(errs).length) {
      setRecords([...records, userDetails]);
      setUserDetails({});
      handleClose();
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    //key "": value, [key]
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
          {Object.keys(error).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : null}

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
              <p>{error.userFName}</p>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="userLName"
                placeholder="Rogers"
                onChange={(e) => handleChange(e)}
                autoFocus
                required
              />
              <p>{error.userLName}</p>
              <Form.Label>Hero Name</Form.Label>
              <Form.Control
                type="text"
                name="userHeroName"
                placeholder="Captain America"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              <p>{error.userHeroName}</p>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                placeholder="name@example.com"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              <p>{error.userEmail}</p>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                name="userGender"
                placeholder="M"
                onChange={(e) => handleChange(e)}
                autoFocus
              />
              <p>{error.userGender}</p>
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
              <p>{error.userAge}</p>
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
};
export default AddRecord;