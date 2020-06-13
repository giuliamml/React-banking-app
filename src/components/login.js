import React, { useState, useEffect }from "react";
import Header from "./header.js";
import LoginForm from "./loginForm";
import { useHistory } from "react-router-dom";


const Login = () => {

    const [state, setState] = useState(true) 

    //create state for the homepage when login is ok

  return (
    <div>
      <Header />
      <LoginForm />

      
    </div>
  );
};

export default Login;
