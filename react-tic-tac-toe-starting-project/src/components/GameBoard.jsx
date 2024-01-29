import { useState } from "react";

export default function GameBoard({ selectSquare, board }) {
  /*const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleChange = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedGameBoard;
    });
    selectSquare();
  }; */

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => selectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
            <li></li>
          </ol>
        </li>
      ))}
    </ol>
  );
}
