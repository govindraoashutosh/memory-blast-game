import {useState,useEffect} from "react";
import GameHeader from "./GameHeader";
import GameStats from "./GameStats";
import MemoryGrid from "./memoryGrid";
import ResultBox from "./ResultBox";


const CARD_VALUES=[
  "/cards/spiderman.jpg",
  "/cards/thor.jpg",
  "/cards/captain.jpg",
  "/cards/ironman.jpg",
  "/cards/hulk.jpg"
];
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
    value:"/cards/doom.jpg",
    type: "bomb",
    isFlipped: false,
    isMatched: false,
    
  },
  {
    id: crypto.randomUUID(),
    value:"/cards/strange.jpg",
    type: "time",
    isFlipped: false,
    isMatched: false,
    
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
  const [gameStatus,setGameStatus]=useState("playing");
  const [usedSpecialCards,setUsedSpecialCards]=useState({
  bomb:false,
  time:false
});

  

  const handleCardClick=(cardId)=>{
  const clickedCard=cards.find(card=>card.id===cardId);
  if(gameStatus!=="playing"||!clickedCard||clickedCard.isFlipped||clickedCard.isMatched||flippedCards.length===2)return;
  setCards(prev=>prev.map(card=>
    card.id===cardId?{...card,isFlipped:true}:card
  ));

  
  setMoves(prev=>prev+1);
  console.log("clickedCard");

  if(clickedCard.type==="bomb"){
     if(!usedSpecialCards.bomb){
       setUsedSpecialCards(prev=>({...prev,bomb:true}));
      setTime(prev=>Math.max(0,prev-10));
    }
      
       
       
     
     

    
    setTimeout(()=>{
      setCards(prev=>prev.map(card=>
        card.id===cardId?{...card,isFlipped:false}:card
      ));
    },800);
    return;}
  


   if(clickedCard.type==="time"){
     if(!usedSpecialCards.time){
     setUsedSpecialCards(prev=>({...prev,time:true}));
      setTime(prev=>Math.min(50,prev+10));
     
    
     }
    setTimeout(()=>{
      setCards(prev=>prev.map(card=>
        card.id===cardId?{...card,isFlipped:false}:card
      ));
    },800);
    return;
  };
  setFlippedCards(prev=>[...prev,clickedCard]);
};

const restartGame=()=>{
    setTime(50);
    setMoves(0);
    setPairs(0);
    setCards(createDeck());
    setFlippedCards([]);
    setGameStatus("playing");
      setUsedSpecialCards({
    bomb:false,
    time:false
  });
}

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

useEffect(()=>{
  if(gameStatus!=="playing")return;
   if(pairs===5)setGameStatus("won");
  else if(time===0)setGameStatus("lost");
},[pairs,time,gameStatus]);

return (
  <div className="memory-game">
    <GameHeader />

    <GameStats
      time={time}
      moves={moves}
      pairs={pairs}
       onRestart={restartGame}
    />
      <MemoryGrid cards={cards}
      onCardClick={handleCardClick} />

      {gameStatus!=="playing"&&(
  <ResultBox
    status={gameStatus}
    moves={moves}
    onRestart={restartGame}
  />
)}
  </div>
  
);
}
export default MemoryGame;


  

 




  


   


  

