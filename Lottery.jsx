import { useState } from "react";
import "./Lottery.css";

export default function Lottery() {
  const generateNumber = () => Math.floor(Math.random() * 1000) + 1;
  const [number, setNumber] = useState(generateNumber());

  const digitSum = (num) => {
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  };

  let sum = digitSum(number);
  let isWinner = sum === 15;

  return (
    <div className="ticket">
      <h1>Lottery Number Generator</h1>
      <p>Your lucky number is: <strong>{number}</strong></p>

      {isWinner ? (
        <h2 style={{ color: "green" }}>🎉 You Win The Lottery! 🎉</h2>
      ) : (
        <h2 style={{ color: "red" }}>😞 Try Again!</h2>
      )}

      <button onClick={() => setNumber(generateNumber())}>Buy New Ticket</button>
    </div>
  );
}
