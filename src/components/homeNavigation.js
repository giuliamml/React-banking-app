import React from "react";
import logo from "../images/CH.svg";
import styles from "../components/homeNavigation.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const HomeNavigation = (props) => {
  console.log(props);
  let id = props.id;
  console.log(id);
  return (
    <div className="header-wrapper">
      <img src={logo} alt="logo" />

      <div className="login-sections">
        <ul>
          <li>
            <Link to={`/homepage/user=${id}`}>Wallet</Link>
          </li>
          <li>
            <Link to={`/savings/user=${id}`}>Savings</Link>
          </li>
          <li>
            <Link to={`/loans/user=${id}`}>Loans</Link>
          </li>
          <li>
            <Link to={`/settings/user=${id}`}>Settings</Link>
          </li>
          <li>{"sign out"}</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeNavigation;
