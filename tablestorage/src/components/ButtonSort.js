import React from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";
//sort alternative
function ButtonSort({ sort, sortAccTo, ascending }) {
  return (
    <>
    <button className="btn btn-white" style={{margin:0,padding:0}}
      onClick={(e) => {
        sort(sortAccTo, ascending);
      }}
    >
    {(ascending) ? <BsFillArrowUpCircleFill/> : <BsFillArrowDownCircleFill/>}
    </button>
    </>
  );
}

export default ButtonSort;
