import { useState } from "react";
import GameHome from "./components/GameHome";
import MemoryGame from "./components/MemoryGame";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");

  return (
    <>
      {screen === "home" && (
        <GameHome onPlay={() => setScreen("game")} />
      )}

      {screen === "game" && (
        <MemoryGame />
      )}
    </>
  );
}

export default App;