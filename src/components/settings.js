import React, { useState } from "react";
import Navigation from "./homeNavigation";
import SignUpForm from "./signupForm";
import styles from "./settings.scss";

const Settings = (props) => {
  console.log(props);
  const { params } = props;
  let id = props.id;

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (userInfo.password === userInfo.confirmPassword) {
      patchUser(userInfo);
      console.log("patched");
    } else {
      console.log("not matching passwords");
      alert("Passwords not matching. Please try again!");
    }
  };

  const patchUser = () => {
    let newData = {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password,
      confirmPassword: userInfo.confirmPassword,
      avatar: userInfo.avatar,
    };

    return fetch(`http://localhost:3001/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return "Oops we couldn't update that!";
        }
      })

      .catch((error) => {
        return "Oops we couldn't update that!";
      });
  };

  return (
    <div>
      <div className="settings-wrapper">
        <div className="settings-header">
          <div>
            {" "}
            <button></button>
            <h1>Settings</h1>
          </div>

          <div className="toggles">
            <div className="toggle">
              {" "}
              <p>Block account</p>
              <label>On</label>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <label>Off</label>
            </div>

            <br></br>

            <div className="toggle">
              <p>
                Round expenses and <br></br>put to savings account
              </p>
              <label>On</label>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <label>Off</label>
            </div>
          </div>
          <h3>User</h3>
        </div>
        <div className="sign-up-wrapper">

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
            <input
              type="file"
              placeholder={"avatar"}
              value={userInfo.avatar}
              name="avatar"
            />
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
