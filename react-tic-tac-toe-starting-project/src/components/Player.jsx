import { useState } from "react";

export default function Player({ player, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player);

  const editPlayer = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let playerContent = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerContent = (
      <input type="text" value={playerName} required onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editPlayer}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
