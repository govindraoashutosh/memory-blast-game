import { useState } from "react";
import GameHeader from "./GameHeader";
import GameStats from "./GameStats";

function MemoryGame() {
  const [time, setTime] = useState(50);
  const [moves, setMoves] = useState(0);
  const [pairs, setPairs] = useState(0);

  return (
  <div className="memory-game">
    <GameHeader />

    <GameStats
      time={time}
      moves={moves}
      pairs={pairs}
    />
  </div>
);
}
export default MemoryGame;



