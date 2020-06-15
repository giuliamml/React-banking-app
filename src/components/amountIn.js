import React, { useState, useEffect } from "react";
import style from "./wallet.scss";

const Amount = (props) => {
  const [userData, setUserData] = useState({
    balance: 0,
    savingsBalance: 0,
    transactions: [],
  });

  const [userInput, setUserInput] = useState(0);

  let userId = document.location.pathname.split("").slice(-1)[0];

  const getUser = async () => {
    let response = await fetch(`http://localhost:3001/users/${userId}`);
    let userDataFetched = await response.json();
    setUserData({
      balance: userDataFetched.balance,
      savingsBalance: userDataFetched.savingsBalance,
    });
    console.log(userData);
  };

  const handleChange = async (event) => {
    await setUserInput(event.target.value);
    console.log(userInput);
  };
//transfer to savings not working
  const handleSubmit = (event) => {
    var today = new Date();
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();

    let newBalance = {
      balance: userData.balance - parseInt(userInput),
      savingsBalance: userData.savingsBalance + parseInt(userInput),
      transactions: [
        ...userData.transactions,
        {
          vendor: "Transfer to Savings",
          amount: "-" + userInput,
          date: date,
        },
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
      <form onSubmit={handleSubmit}>
        <input type="text" id={props.id} onChange={handleChange}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Amount;
