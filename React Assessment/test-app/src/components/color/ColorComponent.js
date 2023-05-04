import React, { useContext } from "react";
import { UserContext } from "../../App";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return color;
};

const HexaColor = () => {
  const bgColor = hexaColor();
  const styles = {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat",
    margin: "32px auto",
    borderRadius: "5px",
    width: "75%",
    border: "2px solid black",
    color: "#fff",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  );
};

const ColorComponent = () => {
  const user = useContext(UserContext);
  return (
    <div className="App-header">
      <p className="App-name">Representing Color and there hexcodes</p>
      {user && user.length > 0 ? (
        user.split("").map((element) => <HexaColor />)
      ) : (
        <HexaColor />
      )}
    </div>
  );
};

export default ColorComponent;
