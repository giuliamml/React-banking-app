import React, { useState, useEffect } from "react";
import Navigation from "./navigation.js";
import LoginForm from "./loginForm";
import { useHistory } from "react-router-dom";
import styles from "../components/navigation.scss";

const Login = () => {
  return (
    <div>
      <Navigation />
      <LoginForm />
    </div>
  );
};

export default Login;
