import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Modal } from "react-bootstrap";
import UserTable from "./UserTable";
import AddRecord from "./AddRecord";

function TopBar() {
  const [show, setShow] = useState(false);
  const [records, setRecords] = useState([]);
  const [loading,setLoading] = useState(()=>true);
  const [searchedTerm,setSearchedTerm] = useState(()=>"");
  const [selectedRecords,setSelectedRecords] = useState(()=>[]);
  const [selectedRecordIds,setSelectedRecordIds] = useState(()=>[]);

  const handleShow = () => {
    setSearchedTerm("");
    setShow(true);
  }
  const handleDelete = ()=>{
    records?.map((record,idx)=>{
      console.log(selectedRecordIds,records);
      const shouldDelete = (selectedRecordIds?.some((id) => idx === id - 1));
      
      console.log("del",shouldDelete);

      shouldDelete && setRecords(records?.filter((recs,id)=> id !== idx));
      console.log(selectedRecordIds,records);
      setSelectedRecordIds([]);
      // setRecords(records.filter((record,idx,recordsArr)=>recordsArr.some(rec =>)))
      // (selectedRecords.some(id => id===idx) && setRecords(records.filter(record.)))
    })
  }
  return (
    <Container fluid>
      <div className="topBar">
        <Button expand="md" onClick={handleShow} variant="outline-primary">
          Add Record
        </Button>{" "}
        <Button expand="md" onClick={handleDelete} variant="outline-danger">
          Delete
        </Button>{" "}
        <Form expand="md" className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setSearchedTerm(e.target.value)}
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
        <UserTable records={records} 
          setRecords={setRecords} 
          searchedTerm={searchedTerm} 
          setSearchedTerm={setSearchedTerm} 
          selectedRecordIds={selectedRecordIds} 
          setSelectedRecordIds={setSelectedRecordIds} 
          setSelectedRecords={setSelectedRecords}/>
      ) : (
        <h3 className="mt-3">Please add Records</h3>
      )}
    </Container>
  );
}

export default TopBar;
