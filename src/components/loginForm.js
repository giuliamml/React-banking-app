import React, { useState, useEffect } from "react";
import styles from "../components/loginForm.scss";
import SignUpForm from "./signupForm.js";
import Homepage from "./homepage";
import { useHistory, useParams } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();

  const [users, setUser] = useState([]);
  const [userEmail, setUserEmail] = useState({ email: "" });

  const getUser = async () => {
    let response = await fetch("http://localhost:3001/users");
    let fetchedUsers = await response.json();
    setUser([...users, ...fetchedUsers]);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let usersArray = users.map((user) => user.email);
    if (usersArray.includes(userEmail.email) === true) {
      let userObj = users.find((user) => user.email === userEmail.email);
      console.log(userObj);
      let id = userObj.id;

      return history.push(`/homepage/user=${id}`);
     
    } else {
      return console.log("not logged in");
    }
  };

  const handleChange = (event) => {
    let email = event.target.value;
    setUserEmail({ email: email });
  };

  function handleClick() {
    history.push("/signup");
  }

  return (
    <div className="login-form-wrapper">
      <div className="header">
        <h3>{"login"}</h3>
      </div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input type="text" placeholder={"email"} />
        <input type="text" placeholder={"password"} />
        <input type="submit" value="Submit" />
      </form>
      <h3>
        <button onClick={handleClick}>{"sign up"}</button>
      </h3>
    </div>
  );
};

export default LoginForm;
