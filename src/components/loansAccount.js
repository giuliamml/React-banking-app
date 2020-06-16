import React, { useState, useEffect } from "react";

const LoansAccount = (props) => {
  const [loansData, setLoansData] = useState({
    loansBalance: 0,
    loansTransactions: [],
  });
  const [amountIn, setAmountIn] = useState({ showComponent: false });
  const [amountOut, setAmountOut] = useState({ showComponent: false });

  let userId = props.id;

  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();


  const getData = async () => {
    let response = await fetch(`http://localhost:3001/users/${userId}`);
    let fetchedData = await response.json();
    console.log(fetchedData);
    let fetchedBalance = fetchedData.loansBalance;
    let fetchedTransactions = fetchedData.loansTransactions;
    setLoansData({
      loansBalance: fetchedBalance,
      loansTransactions: [...loansData.loansTransactions, ...fetchedTransactions],
    });
  };
  console.log(loansData.loansTransactions)

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

  const LoanOut = () => {
    const [userInput, setUserInput] = useState(0);

    const handleChange = (event) => {
      setUserInput(event.target.value);
      console.log(userInput);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let newBalance = loansData.loansBalance + parseInt(userInput);
      setLoansData({
        loansBalance: newBalance,
        loansTransactions: loansData.loansTransactions,
      });

      let updatedBalance = {
        loansTransactions: [...loansData.loansTransactions,
          {
            name: "Loan Out",
            amount: userInput,
            date: date
          },
        ],
        loansBalance: newBalance,
      };
      return fetch(`http://localhost:3001/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBalance),
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
      <div className="amount-input">
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <input type="text" id={props.id}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  };

  const LoanIn = (props) => {
    const [userInput, setUserInput] = useState(0);

    const handleChange = (event) => {
      setUserInput(event.target.value);
      console.log(userInput);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let newBalance = loansData.loansBalance - parseInt(userInput);
      setLoansData({
        loansBalance: newBalance,
        loansTransactions: loansData.loansTransactions,
      });

      let updatedBalance = {
        loansTransactions: [...loansData.loansTransactions,
          {
            name: "Loan In",
            amount: `-${userInput}`,
            date: date
          },
        ],
        loansBalance: newBalance,
      };
      return fetch(`http://localhost:3001/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBalance),
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
      <div className="amount-input">
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <input type="text" id={props.id}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wallet-wrapper" id="loans">
      <div className="wallet-header" id="loans">
        <h1>
          <span>{loansData.loansBalance}</span>
          {"."}
          {"00"}
        </h1>
        <button onClick={buttonClickIn}>Loan in</button>
        <p>{"balance"}</p>
        <button onClick={buttonClickOut}>Pay back</button>{" "}
        {amountIn.showComponent ? (
          <LoanIn className={"savings-amount"} id={userId} />
        ) : null}
        {amountOut.showComponent ? (
          <LoanOut className={"savings-amount"} id={userId} />
        ) : null}
      </div>

      <div className="wallet-content">
        <div className="wallet-content-header">
          <h3>{"Transactions"}</h3>
          <h3>{"Amount"}</h3>
        </div>
        <div className="wallet-transactions">
          <ul>
              
            {loansData.loansTransactions.map((transaction) => (
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
