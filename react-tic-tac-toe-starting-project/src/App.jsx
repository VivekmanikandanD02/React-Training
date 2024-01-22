import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="Player 1" symbol="X" />
          <Player playerName="Player 2" symbol="O" />
        </ol>
        <div id="game-board">GAME BOARD</div>
      </div>
      LOG
    </main>
  );
}

export default App;
