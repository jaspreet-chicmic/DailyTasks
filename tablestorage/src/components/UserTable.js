import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function UserTable({records,
  setRecords,
  searchedTerm,
  setSearchedTerm,
  selectedRecordIds,
  setSelectedRecordIds,
  setSelectedRecords,
  selectState,
  setSelectState}) {
  const [filteredRecords, setFilteredRecords] = useState(() => []);
  const [loading, setLoading] = useState(() => false);
  const [displayRecords, setDisplayRecords] = useState(() => []);
  const [isChecked, setIsChecked] = useState(() => false);

  // const obj = records;
  // obj[0].userLName = "changed";
  // console.log(records[0].userLName);

  useEffect(() => {
    setDisplayRecords(records);
    console.log("mount");
    // console.log
  }, [records]);

  useEffect(() => {
    let id = setTimeout(() => {
      //searched records
      let filteredArr = records?.filter((record) => {
        let arrOfVals = Object.values(record).map((val) =>
          val.toString().toLowerCase()
        );
        let lowerCaseSearch = searchedTerm.toLowerCase();
        return arrOfVals?.some((val) => val.includes(lowerCaseSearch));
      });
      console.log(filteredArr);
      setLoading(false);
      setFilteredRecords(filteredArr);
      // (searchedTerm !== "") && setDisplayRecords(filteredArr)
    }, 500);
    console.log(filteredRecords);

    return () => {
      setLoading(true);
      clearTimeout(id);
    };
    // setLoading(false);
  }, [searchedTerm]);

  useEffect(() => {
    if (searchedTerm === "") setDisplayRecords(records);
    else setDisplayRecords(filteredRecords);
  }, [filteredRecords]);

  // const displayRecords = (searchedTerm === "")? records: filteredRecords;
  return (
    <div className="mt-4">
      {loading && <p className="mt-40">loading...</p>}
      {!loading && (
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
            {displayRecords?.map((oneRecord, id) => {
              {
                /* oneRecord.id = id; */
              }
              return (
                <tr key={oneRecord.id}>
                  {setSelectState((prevSelectState) => [...prevSelectState, false])}
                  <td>
                    <Form.Check
                      inline
                      label={oneRecord.id}
                      name={oneRecord.id}
                      type="checkbox"
                      id={`inline-checkbox-${oneRecord.id}`}
                      checked={selectState[id]}
                      onChange={(e) => {
                        setSelectState(prevSelectState=>!prevSelectState[id]);
                        // setIsChecked(!isChecked);
                        setSelectedRecordIds(() => [
                          ...selectedRecordIds,
                          oneRecord.id,
                        ]);
                        console.log(selectedRecordIds);
                      }}
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
          {console.log(selectedRecordIds)}
        </Table>
      )}
    </div>
  );
}

export default UserTable;
