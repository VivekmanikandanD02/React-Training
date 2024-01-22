import { useState } from "react";

export default function Player({ playerName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [player, setPlayer] = useState(playerName);
  const editPlayer = () => {
    setIsEditing((editing) => !editing);
  };
  const handleChange = (event) => {
    setPlayer(event.target.value);
  };

  let playerContent = <span className="player-name">{player}</span>;
  if (isEditing) {
    playerContent = (
      <input type="text" value={player} required onChange={handleChange} />
    );
  }
  return (
    <li>
      <span className="player">
        {playerContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editPlayer}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
