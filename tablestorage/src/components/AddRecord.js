import React, { useEffect, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
export const DETAIL = {
  ID: "id",
  FIRSTNAME: "userFName",
  LASTNAME: "userLName",
  HERONAME: "userHeroName",
  EMAIL: "userEmail",
  GENDER: "userGender",
  AGE: "userAge",
};

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
  console.log("in add records");
  const [userDetails, setUserDetails] = useState(() => tempObj);
  const [errorBoolean, setErrorBoolean] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(userDetails);
    }
  }, [error]);

  const handleClose = () => setShow(false); //e.preventdefault to avoid refresh

  //arrow over normal
  const checkValidation = (userDetails) => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexName = new RegExp("^[A-Za-z][A-Za-z0-9_]{2,59}$");
    const regexHero = /^[a-z\d\-_\s]+$/i;
    let errors = {};

    if (!userDetails.userFName) {
      errors.userFName = "First name must be provided!";
    } else if (!regexName.test(userDetails.userFName))
      errors.userFName = "Invalid!";

    if (!userDetails.userLName) {
      errors.userLName = "Last name must be provided";
    } else if (!regexName.test(userDetails.userLName))
      errors.userLName = "Invalid!";

    if (!userDetails.userHeroName) {
      errors.userHeroName = "Hero Name must be provided";
    } else if (!regexHero.test(userDetails.userHeroName))
      errors.userHeroName = "Invalid!";

    if (!userDetails.userEmail) {
      errors.userEmail = "Email must be provided";
    } else if (!regexEmail.test(userDetails.userEmail)) {
      errors.userEmail = "This is not a valid email format!";
    }
    if (!userDetails.userGender) {
      errors.userGender = "Gender name must be provided";
    } else {
      switch (userDetails.userGender) {
        case "M":
        case "m":
        case "F":
        case "f":
          break;
        default:
          errors.userGender = "Gender must be : M (for Male) , F (for female)";
          break;
      }
    }
    if (!userDetails.userAge) {
      errors.userAge = "Age must be provided";
    } else if (userDetails.userAge >= 200 || userDetails.userAge < 0)
      errors.userAge = "Invalid!";

    // for (let key in userDetails) {
    //   //Object.keys(userDetails)[1].toString()
    //   if (!userDetails[key]) {
    //     errors[key] = `${key} must be provided`;
    //   } else {
    //     console.log("key :", key, typeof key);
    //     switch (key) {
    //       case DETAIL.FIRSTNAME:
    //       case DETAIL.LASTNAME:
    //         !regexName.test(userDetails[key]) &&
    //           (errors[key] = `Invalid ${key}! `);
    //         break;
    //       case DETAIL.HERONAME:
    //         !regexHero.test(userDetails[key]) &&
    //           (errors[key] = `Invalid ${key}! `);
    //         break;
    //       case DETAIL.EMAIL:
    //         !regexEmail.test(userDetails[key]) &&
    //           (errors[key] = `Invalid ${key}! `);
    //         break;
    //       case DETAIL.AGE:
    //         (userDetails.userAge >= 200 || userDetails.userAge < 0) &&
    //           (errors[key] = `Invalid ${key}! `);
    //         break;
    //       default:
    //         console.log("in default : ", errors);
    //         errors = {};
    //         break;
    //     }
    //   }
    // }
    return errors;
  };

  function onSubmit(e) {
    e.preventDefault();
    setError();
    const errs = checkValidation(userDetails);
    setError(errs);
    console.log("errs ", errs);
    if (!Object.keys(errs).length) {
      setRecords([...records, userDetails]);
      setUserDetails(tempObj);
      // setIsSubmit(true);
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
}
export default AddRecord;
