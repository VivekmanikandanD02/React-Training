import React, { useRef } from "react";
import Constants from "../../common/constant.json";

const HeadingComponent = ({ nameAdded }) => {
  const inputRef = useRef();

  return (
    <div className="App-header">
      <p className="App-name">{Constants.enterName}</p>
      <input
        type="string"
        className="App-input"
        aria-label="username"
        ref={inputRef}
      />
      <button
        className="App-button"
        aria-label="add name"
        onClick={() => {
          if (inputRef.current.value.toLowerCase() === "dhoni") {
            nameAdded(`ms ${inputRef.current.value}`);
          } else {
            inputRef.current.focus();
          }
        }}
      >
        {Constants.add}
      </button>
    </div>
  );
};

export default HeadingComponent;
