import React from "react";
import Navigation from "./navigation.js";
import Wallet from "./wallet.js";
import styles from "../components/wallet.scss";

const Homepage = () => {
  return (
    <div>
      {" "}
      <Navigation />
      <Wallet />
    </div>
  );
};

export default Homepage;
