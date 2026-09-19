function Card({ card, onClick, disabled }) {
  const isVisible = card.isFlipped || card.isMatched;

  return (
    <button
      className={`memory-card ${isVisible ? "flipped" : ""}`}
      onClick={() => onClick(card.id)}
      disabled={disabled}
    >
     {isVisible?<img src={card.value} alt="card"/>:"?"}
    </button>
  );
}

export default Card;