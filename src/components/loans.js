import React from "react";
import HomeNavigation from "./homeNavigation.js";
import LoansAccount from "./loansAccount.js";

const Loans = (props) => {
  const { params } = props;
  console.log(props.match.params.id)
  return (
    <div>
      <HomeNavigation id={props.match.params.id} />
      <LoansAccount id={props.match.params.id}/>
    </div>
  );
};

export default Loans;
