import React, { useState } from "react";
import Navigation from "./homeNavigation";
import SignUpForm from "./signupForm";
import styles from "./settings.scss";

const Settings = (props) => {
  console.log(props);
  const { params } = props;

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

        {/* <SignUpForm id={props.match.params.id} /> */}
      </div>
    </div>
  );
};

export default Settings;
