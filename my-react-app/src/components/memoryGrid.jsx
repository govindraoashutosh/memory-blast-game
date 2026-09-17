import Card from "./Card";

function MemoryGrid({ cards, onCardClick, disabled }) {
  return (
    <div className="memory-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={onCardClick}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default MemoryGrid;