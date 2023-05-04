import React, { useState, createContext } from "react";
import "./App.css";
import ColorComponent from "./components/color/ColorComponent";
import CounterComponent from "./components/counter/CounterComponent";
import HeadingComponent from "./components/heading/HeadingComponent";
import UsecontextComponent from "./components/usecontext/UsecontextComponent";

const App = () => {
  const [isNameAvailable, setNameAvailable] = useState(false);
  const [userName, setUserName] = useState("");
  const [showNewPage, setShowNewPage] = useState(false);
  const nameAdded = (value) => {
    setNameAvailable(true);
    setUserName(value);
  };

  return (
    <UserContext.Provider value={userName}>
      {showNewPage ? (
        <ColorComponent />
      ) : (
        <div className="App">
          {isNameAvailable ? (
            <UsecontextComponent setShowNewPage={setShowNewPage} />
          ) : (
            <HeadingComponent nameAdded={nameAdded} />
          )}
          <header className="App-header">
            {isNameAvailable && <CounterComponent />}
          </header>
        </div>
      )}
    </UserContext.Provider>
  );
};

export const UserContext = createContext();
export default App;
