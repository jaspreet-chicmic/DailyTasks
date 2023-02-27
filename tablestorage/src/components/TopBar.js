import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Modal } from "react-bootstrap";
import UserTable from "./UserTable";
import AddRecord from "./AddRecord";

function TopBar() {
  const [show, setShow] = useState(false);
  const [records, setRecords] = useState({});
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <div className="topBar">
        <Button expand="md" onClick={handleShow} variant="outline-primary">
          Add Record
        </Button>{" "}
        <Button expand="md" variant="outline-danger">
          Delete
        </Button>{" "}
        <Form expand="md" className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>
      {show && (
        <AddRecord
          show={show}
          setShow={setShow}
          records={records}
          setRecords={setRecords}
        />
      )}
      {Object.entries(records).length ? (
        <UserTable records={records} setRecords={setRecords} />
      ) : (
        <h3 className="mt-3">Please add Records</h3>
      )}
    </Container>
  );
}

export default TopBar;
