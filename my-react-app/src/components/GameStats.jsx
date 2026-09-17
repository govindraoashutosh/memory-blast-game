function GameStats({ time, moves, pairs, onRestart }) {
  return (
    <div className="game-stats">
      <div className="stat-box">
        <span>TIME</span>
        <strong>{time}s</strong>
      </div>

      <div className="stat-box">
        <span>MOVES</span>
        <strong>{moves}</strong>
      </div>

      <div className="stat-box">
        <span>PAIRS</span>
        <strong>{pairs}/5</strong>
      </div>

      <button className="restart-button" onClick={onRestart}>
        ↻ Restart
      </button>
    </div>
  );
}

export default GameStats;