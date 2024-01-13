import { useState } from "react";

const Count = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const stepPlus = () => {
    setStep((s) => s + 1);
  };

  const stepMinus = () => {
    setStep((s) => s - 1);
  };

  const countPlus = () => {
    setCount((c) => c + step);
  };

  const countMinus = () => {
    setCount((c) => c - step);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={stepMinus}>-</button>
        <p>Step: {step}</p>
        <button onClick={stepPlus}>+</button>
      </div>
      <div>
        <button onClick={countMinus}>-</button>
        <p>Count: {count}</p>
        <button onClick={countPlus}>+</button>

        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
};

export default Count;
