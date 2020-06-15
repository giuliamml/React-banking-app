import React from "react";
import HomeNavigation from "./homeNavigation.js";
import SavingsAccount from "./savingsAccount.js";

const Savings = (props) => {
  const { params } = props;
  console.log(props.match.params.id)
  return (
    <div>
      <HomeNavigation id={props.match.params.id} />
      <SavingsAccount id={props.match.params.id}/>
    </div>
  );
};

export default Savings;
