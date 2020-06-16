import React, { useState, useEffect } from "react";

const LoanOut = (props) => {
  return (
    <div className="amount-input">
      <form >
        <input type="text" id={props.id}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default LoanOut