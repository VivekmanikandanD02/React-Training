import React, { useContext } from "react";
import { UserContext } from "../../App";
import Constants from '../../common/constant.json';

const UsecontextComponent = ({ setShowNewPage }) => {
  const user = useContext(UserContext);

  return (
    <div className="App-username-wrapper">
      <span className="App-username"> {Constants.welcome} <span className="App-playername">{user}!!</span></span>
      <button
        onClick={() => setShowNewPage(true)}
        type="button"
        className="App-button"
        aria-label="new page"
      >
        {Constants.navigate}
      </button>
    </div>
  );
};

export default UsecontextComponent;
