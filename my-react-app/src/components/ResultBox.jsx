function ResultBox({status,moves,onRestart}){
  const won=status==="won";

  return(
    <div className={`game-result ${won?"game-win":"game-lose"}`}>
      <div className="game-result-box">
        <div className="game-result-icon">{won?"🥳":"😞"}</div>
        <h2>{won?"CONGRATULATIONS!":"YOU LOSE!"}</h2>
        <p>{won?"You found all 5 pairs!":"Time ran out!"}</p>
        <div className="game-result-moves">Moves <strong>{moves}</strong></div>
        <button onClick={onRestart}>PLAY AGAIN</button>
      </div>
    </div>
  );
}

export default ResultBox;