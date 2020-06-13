import React, { useState, useEffect } from "react";
import styles from "../components/wallet.scss";
import avatar from "../images/avatar.svg";

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);


  //review hot to get params from url
  let userId = document.location.pathname.split("").slice(-1)[0];
  console.log(userId);

  const getTransactions = async () => {
    let response = await fetch(
      `http://localhost:3001/transactions?userId=${userId}`
    );
    let fetchedTransactions = await response.json();
    setTransactions([...transactions, ...fetchedTransactions]);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  console.log(transactions);


  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  return (
    <div className="wallet-wrapper">
      <div className="wallet-header">
        <h1><span>{'3 830'}</span>{".21"}</h1>
        <img src={avatar} alt="avatar"></img>
        <p>{"balance"}</p>
        <p>{date}</p>
      </div>

      <div className="wallet-content">
        <div className="wallet-content-header">
          <h3>{"Transactions"}</h3>
          <h3>{"Amount"}</h3>
        </div>
        <div className="wallet-transactions">
          <ul>
            {transactions.map((transaction) => (
              <div className="transaction">
                <li key={transaction.id}>{transaction.vendor}</li>
                <span key={transaction.amount}>
                  {"£"}
                  {transaction.amount}
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
