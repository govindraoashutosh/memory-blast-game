import { useState } from "react";
import GameHeader from "./GameHeader";
import GameStats from "./GameStats";
import MemoryGrid from "./memoryGrid";


const CARD_VALUES = ["🍎", "🍌", "🍇", "🍕", "🚀"];

function createDeck(){
   const Normalcards = CARD_VALUES.flatMap((value) =>[
    {
       id: crypto.randomUUID(),
      value: value,
      type: "normal",
      isFlipped: false,
      isMatched: false
    },
    { id: crypto.randomUUID(),
      value: value,
      type: "normal",
      isFlipped: false,
      isMatched: false

    }
  ])
  const specialCards = [
  {
    id: crypto.randomUUID(),
    value: "💣",
    type: "bomb",
    isFlipped: false,
    isMatched: false
  },
  {
    id: crypto.randomUUID(),
    value: "⏱️",
    type: "time",
    isFlipped: false,
    isMatched: false
  }
];
return [...Normalcards, ...specialCards].sort(
  () => Math.random() - 0.5
);

}


    
   


function MemoryGame() {
  const [time, setTime] = useState(50);
  const [moves, setMoves] = useState(0);
  const [pairs, setPairs] = useState(0);
  const [cards, setCards] = useState(() => createDeck());

  const handleCardClick = (cardId) => {
  const clickedCard = cards.find((card) => card.id === cardId);

  if (!clickedCard) return;
  if (clickedCard.isFlipped || clickedCard.isMatched) return;

  setCards((previousCards) =>
    previousCards.map((card) =>
      card.id === cardId
        ? { ...card, isFlipped: true }
        : card
    )
  );
};

  


  return (
  <div className="memory-game">
    <GameHeader />

    <GameStats
      time={time}
      moves={moves}
      pairs={pairs}
    />
      <MemoryGrid cards={cards}
      onCardClick={handleCardClick} />
  </div>
);
}
export default MemoryGame;



