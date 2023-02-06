import React from "react";
import "./App.css";
import Person from "./components/Person";
import Persons from "./components/Persons";

const personList = [
  { firstName: "User", lastName: "1" },
  { firstName: "User", lastName: "2" },
  { firstName: "User", lastName: "3" },
];
function App() {
  return (
    <div className="App">
      <Person firstName={10} />
      <Persons personList={personList} />
    </div>
  );
}

export default App;
