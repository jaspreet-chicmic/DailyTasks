import React from "react";
import { Button } from "react-bootstrap";
import { DETAIL } from "./AddRecord";
import ButtonSort from "./ButtonSort";

function TableHeader({ displayRecords, setDisplayRecords }) {
  const sort = (sortAccTo, ascending) => {
    let sortedRecords = [];
    sortAccTo === DETAIL.AGE &&
      ascending &&
      (sortedRecords = [...displayRecords].sort(
        (a, b) => a[DETAIL.AGE] - b[DETAIL.AGE]
      )); //ascending

    sortAccTo === DETAIL.AGE &&
      !ascending &&
      (sortedRecords = [...displayRecords].sort(
        (a, b) => b[DETAIL.AGE] - a[DETAIL.AGE]
      )); //Descending

    sortAccTo !== DETAIL.AGE &&
      ascending &&
      (sortedRecords = [...displayRecords].sort((a, b) => {
        const nameA = a[sortAccTo].toLowerCase(); // ignore upper and lowercase
        const nameB = b[sortAccTo].toLowerCase(); // ignore upper and lowercase
        return nameA < nameB ? -1 : 1;
      }));

    sortAccTo !== DETAIL.AGE &&
      !ascending &&
      (sortedRecords = [...displayRecords].sort((a, b) => {
        const nameA = a[sortAccTo].toLowerCase(); // ignore upper and lowercase
        const nameB = b[sortAccTo].toLowerCase(); // ignore upper and lowercase
        return nameA < nameB ? 1 : -1;
      }));

    console.log("sortedRecords ", sortedRecords, sortAccTo);
    setDisplayRecords(sortedRecords);
  };
  return (
    <>
      <thead>
        <tr>
          <th>#</th>
          <th>
            First Name{" "}
            <ButtonSort
              sort={sort}
              sortAccTo={DETAIL.FIRSTNAME}
              ascending={1}
            />{" "}
            <ButtonSort
              sort={sort}
              sortAccTo={DETAIL.FIRSTNAME}
              ascending={0}
            />
          </th>
          <th>
            Last Name{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.LASTNAME} ascending={1} />{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.LASTNAME} ascending={0} />
          </th>
          <th>
            Hero Name{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.HERONAME} ascending={1} />{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.HERONAME} ascending={0} />
          </th>
          <th>
            Email{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.EMAIL} ascending={1} />{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.EMAIL} ascending={0} />
          </th>
          <th>
            Gender{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.GENDER} ascending={1} />{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.GENDER} ascending={0} />
          </th>
          <th>
            Age <ButtonSort sort={sort} sortAccTo={DETAIL.AGE} ascending={1} />{" "}
            <ButtonSort sort={sort} sortAccTo={DETAIL.AGE} ascending={0} />
          </th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
