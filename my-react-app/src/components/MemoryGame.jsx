import {useState,useEffect} from "react";
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
  const [flippedCards,setFlippedCards]=useState([]);

  const handleCardClick=(cardId)=>{
  const clickedCard=cards.find(card=>card.id===cardId);
  if(!clickedCard||clickedCard.isFlipped||clickedCard.isMatched||flippedCards.length===2)return;

  setCards(prev=>prev.map(card=>
    card.id===cardId?{...card,isFlipped:true}:card
  ));

  setFlippedCards(prev=>[...prev,clickedCard]);
  setMoves(prev=>prev+1);

  if(clickedCard.type==="bomb"){
    setTime(prev=>Math.max(0,prev-10));
    setTimeout(()=>{
      setCards(prev=>prev.map(card=>
        card.id===cardId?{...card,isFlipped:false}:card
      ));
    },800);
    return;
  };

   if(clickedCard.type==="time"){
    setTime(prev=>prev+10);
    setTimeout(()=>{
      setCards(prev=>prev.map(card=>
        card.id===cardId?{...card,isFlipped:false}:card
      ));
    },800);
    return;
  };
};
useEffect(()=>{
  if(flippedCards.length!==2)return;

  const [first,second]=flippedCards;

  if(first.value===second.value){
    setCards(prev=>prev.map(card=>
      card.value===first.value?{...card,isMatched:true}:card
    ));
    setPairs(prev=>prev+1);
  }else{
    setTimeout(()=>{
      setCards(prev=>prev.map(card=>
        card.id===first.id||card.id===second.id
          ?{...card,isFlipped:false}:card
      ));
    },800);
  }
    setFlippedCards([]);
},[flippedCards]);

 useEffect(()=>{
  if(time===0)return;
  const timer=setTimeout(()=>setTime(time-1),1000);
  return()=>clearTimeout(timer);
},[time]);

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


  


  


   


  

