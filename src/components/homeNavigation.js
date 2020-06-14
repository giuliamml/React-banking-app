import React from "react";
import logo from "../images/CH.svg";
import styles from "../components/homeNavigation.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const HomeNavigation = () => {

    //implement user id fot routing
    
  return (
    <div className="header-wrapper">
      <img src={logo} alt="logo" />

      <div className="login-sections">
        <ul>
          <li>
            <Link to="/userId=:id">Wallet</Link>
          </li>
          <li>
            <Link to="/savings/userId=:id">Savings</Link>
          </li>
          <li>
            <Link to="/loans/userId=:id">Loans</Link>
          </li>
          <li>
            <Link to="/settings/userId=:id">Settings</Link>
          </li>
          <li>
              {'sign out'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeNavigation;
