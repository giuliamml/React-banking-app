import React, { useState, useEffect } from "react";
import LoanIn from './loanIn.js'
import LoanOut from './loanOut.js'

const LoansAccount = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState();
  const [amountIn, setAmountIn] = useState({ showComponent: false });
  const [amountOut, setAmountOut] = useState({ showComponent: false });


  let userId = props.id;
  console.log(userId);

  const getData = async () => {
    let response = await fetch(`http://localhost:3001/users/${userId}`);
    let fetchedData = await response.json();
    console.log(fetchedData);
    let fetchedBalance = fetchedData.loansBalance;
    setBalance([balance, fetchedBalance]);
  };

  const getTransactions = async () => {
    let response = await fetch(`http://localhost:3001/loans?userId=${userId}`);
    let fetchedData = await response.json();
    console.log(fetchedData);
    let fetchedTransactions = fetchedData;
    setTransactions([...transactions, ...fetchedTransactions]);
  };

 
  const buttonClickOut = () => {
    return amountOut.showComponent
      ? setAmountOut({ showComponent: false })
      : setAmountOut({ showComponent: true });
  };


  const buttonClickIn = () => {
    {
      return amountIn.showComponent
        ? setAmountIn({ showComponent: false })
        : setAmountIn({ showComponent: true });
    }
  };

  useEffect(() => {
    getData();
    getTransactions();
  }, []);

  return (
    <div className="wallet-wrapper" id="loans">
      <div className="wallet-header" id="loans">
        <h1>
          <span>{balance}</span>
          {"."}
          {"00"}
        </h1>
        <button onClick={buttonClickIn}>Pay in</button>
        <p>{"balance"}</p>
        <button onClick={buttonClickOut}>Pay out</button>{" "}
        {amountIn.showComponent ? <LoanIn className={"savings-amount"} id={userId}/> : null}
        {amountOut.showComponent ? <LoanOut className={"savings-amount"} id={userId}/> : null}
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
                  {"£ "}
                  {transaction.amount}
                </span>
                <li key={transaction.date}>{transaction.date}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoansAccount;
