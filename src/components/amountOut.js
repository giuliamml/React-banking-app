import React, { useState, useEffect } from "react";
import style from "./wallet.scss";

const AmountOut = (props) => {
  const [userData, setUserData] = useState({
    balance: 0,
    savingsBalance: 0,
    transactions: [],
    savings: [],
  });

  const [userInput, setUserInput] = useState(0);

  let userId = props.id

  const getUser = async () => {
    let response = await fetch(`http://localhost:3001/users/${userId}`);
    let userDataFetched = await response.json();
    setUserData({
      balance: userDataFetched.balance,
      savingsBalance: userDataFetched.savingsBalance,
      transactions: userDataFetched.transactions,
      savings: userDataFetched.savings,
    });
    console.log(userData);
  };

  const handleChange = async (event) => {
    await setUserInput(event.target.value);
    console.log(userInput);
  };

  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  const handleSubmit = (event) => {
    let newBalance = {
      balance: userData.balance + parseInt(userInput),
      savingsBalance: userData.savingsBalance - parseInt(userInput),
      transactions: [
        ...userData.transactions,
        { vendor: "Transfer from Savings", amount: userInput, date: date },
      ],
      savings: [
        ...userData.savings,
        { vendor: "Transfer To Savings", amount: `- ${userInput}`, date: date },
      ],
    };

    return fetch(`http://localhost:3001/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBalance),
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

  console.log(userData);
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="amount-input">
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input type="text" id={props.id}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default AmountOut;
