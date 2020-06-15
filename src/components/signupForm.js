import React, { useState, useEffect } from "react";
import Header from "./navigation";
import styles from "../components/signupForm.scss";
import { useHistory } from "react-router-dom";

const SignUpForm = (props) => {

  console.log(props)
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });

  const [file, setFile] = useState({ avatar: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
    setFile({ ...file, avatar: event.target.files });
    console.log(event);
  };

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (userInfo.password === userInfo.confirmPassword) {
      postUser(userInfo);
      console.log("posted");
      history.push("/");
    } else {
      console.log("not matching passwords");
      alert("Passwords not matching. Please try again!");
    }
  };

  const postUser = async (user) => {
    return fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())

      .then((data) => data)
      .catch((error) => console.log("Oops something went wrong!"));
  };

  return (
    <div className="sign-up-wrapper">
      <div className="header">
        <button onClick={() => history.push("/")}></button>
        <h3>{"sign up"}</h3>
      </div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={"first name"}
          className="firstName"
          name="firstName"
          value={userInfo.firstName}
        />
        <input
          type="text"
          placeholder={"last name"}
          className="lastName"
          name="lastName"
          value={userInfo.lastName}
        />
        <input
          type="text"
          placeholder={"email"}
          className="email"
          name="email"
          value={userInfo.email}
        />
        <input
          type="password"
          placeholder={"password"}
          className="password"
          name="password"
          value={userInfo.password}
        />
        <input
          type="password"
          placeholder={"confirm password"}
          className="confirmPassword"
          name="confirmPassword"
          value={userInfo.confirmPassword}
        />
        <label>{"Upload avatar"}</label>
        <input type="file" placeholder={"avatar"}  value={userInfo.avatar} name='avatar'/>
        <input type="submit" value="Save" />
      </form>
    </div>


  );
};

export default SignUpForm;
