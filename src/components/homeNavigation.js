import React, { useState } from "react";
import logo from "../images/CH.svg";
import styles from "../components/homeNavigation.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Settings from "./settings";
const HomeNavigation = (props) => {
  console.log(props);
  let id = props.id;
  console.log(id);

  const [settings, setSettings] = useState({
    showComponent: false,
  });

  const handleClick = () => {
    {
      return settings.showComponent
        ? setSettings({ showComponent: false })
        : setSettings({ showComponent: true });
    }
  };
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
          <li onClick={handleClick}>Settings</li>
          <li>{"sign out"}</li>
        </ul>
      </div>
      {settings.showComponent ? <Settings id={id} /> : null}
    </div>
  );
};

export default HomeNavigation;
