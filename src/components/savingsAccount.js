import React, { useState, useEffect } from "react";
import AmountIn from "./amountIn";
import AmountOut from "./amountOut.js";

const SavingsAccount = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const [amountIn, setAmountIn] = useState({ showComponent: false });
  const [amountOut, setAmountOut] = useState({ showComponent: false });

  const buttonClickIn = () => {
    {
      return amountIn.showComponent
        ? setAmountIn({ showComponent: false })
        : setAmountIn({ showComponent: true });
    }
  };

  const buttonClickOut = () => {
    return amountOut.showComponent
      ? setAmountOut({ showComponent: false })
      : setAmountOut({ showComponent: true });
  };

  let userId = props.id
  console.log(userId);


  const getTransactions = async () => {
    let response = await fetch(
      `http://localhost:3001/users/${userId}`
    );
    let fetchedTransactions = await response.json();
    
    setTransactions([...transactions, ...fetchedTransactions.savings]);
  };

  const getBalance = async () => {
    let response = await fetch(`http://localhost:3001/users/${userId}`);
    let fetchedData = await response.json();
    let balance = fetchedData.savingsBalance;

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

  //on pay out: transfer amount from savings to wallet

  return (
    <div className="wallet-wrapper">
      <div className="wallet-header">
        <h1>
          <span>{integer}</span>
          {"."}
          {decimals}
        </h1>
        <button onClick={buttonClickIn}>Pay in</button>
        <p>{"balance"}</p>
        <button onClick={buttonClickOut}>Pay out</button>{" "}
        {amountIn.showComponent ? <AmountIn id={"savings-amount"} /> : null}
        {amountOut.showComponent ? <AmountOut id={"savings-amount"} /> : null}
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
                <span key={transaction.amount}>
                  {"£"}
                  {transaction.amount}
                </span>{" "}
                <p>{transaction.date}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SavingsAccount;
