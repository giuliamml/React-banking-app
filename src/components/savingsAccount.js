import React, { useState, useEffect } from "react";
import Amount from "./amount";

const SavingsAccount = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [payIn, setPayIn] = useState(0);
  const [payOut, setPayOut] = useState(0);

  const [amount, setAmount] = useState({ showComponent: false });

  const buttonClick = () => {
    {
      return amount.showComponent
        ? setAmount({ showComponent: false })
        : setAmount({ showComponent: true });
    }
  };
  console.log(amount);
  //review how to get params from url
  let userId = document.location.pathname.split("").slice(-1)[0];
  console.log(userId);

  const getTransactions = async () => {
    let response = await fetch(
      `http://localhost:3001/savings?userId=${userId}`
    );
    let fetchedTransactions = await response.json();
    setTransactions([...transactions, ...fetchedTransactions]);
  };

  const getBalance = async () => {
    let response = await fetch(`http://localhost:3001/users?id=${userId}`);
    let fetchedData = await response.json();
    let balance = fetchedData[0].savingsBalance;

    setBalance(balance);
  };

  //balance
  let balanceArray = balance.toString().split(".");
  let integer = balanceArray[0];
  let decimals = balanceArray[1];

  useEffect(() => {
    getTransactions();
    getBalance();
  }, []);

  //on pay in btn: transfer amount from wallet to savings
  //on pay out: transfer amount from savings to wallet

  const handlePayIn = () => {};

  return (
    <div className="wallet-wrapper">
      <div className="wallet-header">
        <h1>
          <span>{integer}</span>
          {"."}
          {decimals}
        </h1>
        <button onClick={buttonClick}>
          Pay in</button>
        
        <p>{"balance"}</p>
        <button>Pay out</button>
        {amount.showComponent ? <Amount id={'savings-amount'}/> : null}
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
                <li key={transaction.id}>{transaction.name}</li>
                <p>{transaction.date}</p>
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

export default SavingsAccount;
