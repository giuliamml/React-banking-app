import React from "react";
import logo from "../images/CH.svg";
import styles from "../components/navigation.scss";

const Navigation = () => {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="logo" />

      <div className="login-sections">
        <ul>
          <li>
            <a>{"login"}</a>
          </li>
          <li>{" / "}</li>
          <li>
            <a>{"sign up"}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
