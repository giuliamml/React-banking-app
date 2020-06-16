import React from "react";
import HomeNavigation from "./homeNavigation.js";
import Wallet from "./wallet.js";
import styles from "../components/wallet.scss";

const Homepage = (props) => {
  console.log(props)
  const {params} = props
  return (
    <div>
      {" "}
      <HomeNavigation id={props.match.params.id} />
      <Wallet id={props.match.params.id} />
    </div>
  );
};

export default Homepage;
