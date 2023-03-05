import React from "react";

function ButtonSort({ sort, sortAccTo, ascending }) {
  const btnTxt = ascending ? " A " : " D ";
  return (
    <button
      onClick={(e) => {
        sort(sortAccTo, ascending);
      }}
    >
      {btnTxt}
    </button>
  );
}

export default ButtonSort;
