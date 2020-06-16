import React, { useState, useEffect } from "react";
import styles from "../components/wallet.scss";
import avatar from "../images/avatar.svg";

const Wallet = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  //review how to get params from url
  let userId = document.location.pathname.split("").slice(-1)[0];
  console.log(userId);

  const getBalance = async () => {
    let response = await fetch(`http://localhost:3001/users/${userId}`);
    let fetchedData = await response.json();
    console.log(fetchedData.balance);
    let balance = fetchedData.balance;
    let fetchedTransactions = fetchedData.transactions;
    setTransactions([...transactions, ...fetchedTransactions]);
    console.log(fetchedTransactions);

    setBalance(balance);
  };

  // //get balance
  // let balanceArray = balance.toString().split('.')
  // let integer = balanceArray[0]
  // let decimals = balanceArray[1]

  useEffect(() => {
    getBalance();
  }, []);

  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  return (
    <div className="wallet-wrapper">
      <div className="wallet-header">
        <h1>
          <span>{balance}</span>
          {"."}
          {"00"}
        </h1>
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
                  {"£ "}
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
