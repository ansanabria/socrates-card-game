import { useState } from "react";

import Deck from "./components/Deck";
import Shuffle from "./assets/shuffle.svg?react";
import Next from "./assets/next.svg?react";

import data from "./data.json";

function shuffle(array) {
  const newArray = array.map((value) => value);
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function App() {
  const [cards, setCards] = useState(shuffle(data));
  const [isFlipped, setIsFlipped] = useState(false);
  const state = { isFlipped, setIsFlipped };

  function handleShuffle() {
    if (isFlipped) {
      setIsFlipped(false);
      setCards((prevCards) => shuffle(prevCards));
    }
  }

  function handleNext() {
    if (isFlipped) {
      setIsFlipped(false);
      setCards((prevCards) => prevCards.slice(1));
    }
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-8 bg-[url('/src/assets/wood-background.jpeg')]">
      <Deck data={cards} state={state} />
      <div className="flex gap-x-4">
        <button className="h-fit w-fit" onClick={handleShuffle}>
          <Shuffle className="h-14 w-14 rounded-full border-2 bg-white fill-[#5A7D7C] p-2" />
        </button>
        <button className="h-fit w-fit" onClick={handleNext}>
          <Next className="h-14 w-14 rounded-full border-2 bg-white fill-[#5A7D7C] p-2" />
        </button>
      </div>
    </div>
  );
}

export default App;
