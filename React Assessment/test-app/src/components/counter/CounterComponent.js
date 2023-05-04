import React, { useEffect, useState } from "react";
import Constants from "../../common/constant.json";

const CounterComponent = () => {
  const [addValue, setAddValue] = useState(0);
  const [addCount, setAddCount] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [mssgArray, setMssgArray] = useState(Constants.mssgArray);
  const topScoreFn = () => {
    if (
      displayValue > Constants.topScore &&
      mssgArray.indexOf(Constants.congrats) === -1
    ) {
      setMssgArray([...mssgArray, Constants.congrats]);
    }
  };
  const updateValue = (value) => {
    setDisplayValue(displayValue + value);
    topScoreFn();
  };

  useEffect(() => {
    setDisplayValue(displayValue + addValue);
    topScoreFn();
  }, [addCount]);

  return (
    <>
      <p className="App-name">{Constants.playerScore}</p>
      <div className="App-inputWrapper">
        {Constants.enterRun}
        <input
          type="string"
          className="App-input"
          aria-label="Set increment amount"
          value={addValue}
          onChange={(e) => setAddValue(Number(e.target.value))}
        />
        <button
          className="App-button"
          aria-label="add value"
          disabled={addValue === 0}
          onClick={() => setAddCount((c) => c + 1)}
        >
          {Constants.add}
        </button>
      </div>
      <div className="App-displayWrapper">
        <button
          className="App-button"
          aria-label="add value"
          onClick={() => {
            if (displayValue > 0) {
              updateValue(-1);
            }
          }}
        >
          -
        </button>
        <div className="App-display">{displayValue}</div>
        <button className="App-button" aria-label="add value">
          +
        </button>
      </div>
      {displayValue > 0 && (
        <>
          <p className="App-name">{Constants.findMssg}</p>
          <p className="App-inputWrapper">
            {mssgArray[Math.floor(displayValue % mssgArray.length)]}
          </p>
        </>
      )}
    </>
  );
};

export default CounterComponent;
