import React from "react";
import "./App.scss";
import Login from "./components/login.js";
import SignUp from "./components/signupForm.js";
import Homepage from "./components/homepage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/userId=:id" component={Homepage}></Route>
    </Router>
  );
}

export default App;
