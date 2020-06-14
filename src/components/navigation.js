import React from "react";
import logo from "../images/CH.svg";
import styles from "../components/navigation.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div className="header-wrapper">
      <img src={logo} alt="logo" />

      <div className="login-sections">
        <ul>
          <li>
          <Link to="/">Login</Link>
          </li>
          <li>{" / "}</li>
          <li>
          <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

