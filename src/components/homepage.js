import React from "react";
import HomeNavigation from "./homeNavigation.js";
import Wallet from "./wallet.js";
import styles from "../components/wallet.scss";

const Homepage = () => {
  return (
    <div>
      {" "}
      <HomeNavigation />
      <Wallet />
    </div>
  );
};

export default Homepage;
