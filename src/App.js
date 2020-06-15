//components
import Login from "./components/login.js";
import SignUp from "./components/signupForm.js";
import Homepage from "./components/homepage.js";
import Settings from "./components/settings.js";
import Savings from "./components/savings.js";
//react hooks
import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
      <Route exact path="/homepage/user=:id" component={Homepage}></Route>
      <Route exact path="/savings/user=:id" component={Savings}></Route>
    </Router>
  );
}

export default App;
