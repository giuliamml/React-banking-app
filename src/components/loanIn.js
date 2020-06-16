import React, { useState, useEffect } from "react";

const LoanIn = (props) => {
  return (
    <div className="amount-input">
      <form >
        <input type="text" id={props.id}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default LoanIn