import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function UserTable({
  records,
  setRecords,
  searchedTerm,
  setSearchedTerm,
  selectedRecordIds,
  setSelectedRecordIds,
  setSelectedRecords,
  displayRecords,
  setDisplayRecords,
  checked,
  setChecked,
}) {
  const [filteredRecords, setFilteredRecords] = useState(() => []);
  const [loading, setLoading] = useState(() => false);

  useEffect(() => {}, [displayRecords]);

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
              <th
                onClick={() => {
                  sort;
                }}
              >
                First Name
              </th>
              <th>Last Name</th>
              <th>Hero Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {console.log(displayRecords, "est")}
            {displayRecords?.map((oneRecord, id) => {
              {
                /* oneRecord.id = id; */
              }

              return (
                <tr key={oneRecord.id}>
                  {console.log("che :", oneRecord)}
                  <td>
                    <label>
                      <input
                        name={oneRecord.id}
                        type="checkbox"
                        checked={selectedRecordIds.includes(oneRecord.id)}
                        onChange={(e) => {
                          // console.log(e.target.checked)
                          if (e.target.checked)
                            setSelectedRecordIds(() => [
                              ...selectedRecordIds,
                              oneRecord.id,
                            ]);
                          else
                            setSelectedRecordIds(() => {
                              return selectedRecordIds.filter(
                                (id) => id !== oneRecord.id
                              );
                            });
                          console.log(selectedRecordIds);
                          // oneRecord.checked = e.target.checked;
                          // let arr = displayRecords;
                          // arr[oneRecord.id].checked = e.target.checked ;

                          // setDisplayRecords(arr)
                          // console.log(displayRecords)
                          // setRecords(displayRecords);
                        }}
                      />{" "}
                      {oneRecord.id}
                    </label>
                    {/* <Form.Check
              inline
              label={oneRecord.id}
              name={oneRecord.id}
              type="checkbox"
              id={`inline-checkbox-${oneRecord.id}`}
              checked={()=>{setIsChecked(() => [...isChecked, false]);return isChecked[oneRecord.id]}}
              onChange={(e)=>{
                setIsChecked(() => {console.log(isChecked);return !isChecked[oneRecord.id]});
                let selected = isChecked[oneRecord.id]; 
                selected && setSelectedRecordIds(()=>[...selectedRecordIds,oneRecord.id]);
                !selected && setSelectedRecordIds((prevSelectedRecordIds)=>prevSelectedRecordIds.filter(elemId => elemId !== oneRecord.id));
                console.log("selectedRecordIds ",selectedRecordIds,isChecked)
                }}
              /> */}
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
