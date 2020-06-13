import React from "react";
import styles from '../components/wallet.scss'
import avatar from "../images/avatar.svg";

const Wallet = () => {
  var today = new Date();
  var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" +  today.getFullYear()
    
  return (
    <div className="wallet-wrapper">
      <div className="wallet-header">
        <h1>{"balance"}</h1>
        <img src={avatar} alt="avatar"></img>
        <p>{"balance"}</p>
        <p>{date}</p>
      </div>

      <div className="wallet-content">
          <div className='wallet-content-header'>
              <h3>{'Transactions'}</h3>
              <h3>{'Amount'}</h3>
          </div>
          <div className='wallet-transactions'>
              <ul>
                  <li>{'something'}</li>
              </ul>
          </div>
      </div>

    </div>
  );
};

export default Wallet;
