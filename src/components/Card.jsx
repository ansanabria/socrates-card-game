import { useState } from "react";
import CardFlip from "react-card-flip";
import Troya from "../assets/troya.svg?react";
import Cover from "../assets/cover.svg?react";

function Card({ question, section, isInteractive = false, state }) {
  const { isFlipped, setIsFlipped } = state;

  function handleIsFlipped() {
    setIsFlipped((prevFlipped) => !prevFlipped);
  }

  return (
    <CardFlip
      isFlipped={isInteractive ? !isFlipped: false} // Library takes isFlipped === false as the front
      flipDirection="horizontal"
      containerClassName="w-fit"
      flipSpeedBackToFront={0.5}
      flipSpeedFrontToBack={0.5}
    >
      <div
        key="front"
        className={`card-shadow flex h-[403px] w-[290px] select-none flex-col items-center justify-between rounded-xl bg-white p-4`}
      >
        <div className="flex flex-col gap-y-5 p-3">
          <h2 className="font-noto-serif text-sm font-light uppercase tracking-widest">
            {section}
          </h2>
          <p className="font-eb-garamond text-2xl">{question}</p>
        </div>
        <Troya />
      </div>

      <Cover
        key="back"
        className={`card-shadow h-[403px] w-[290px] select-none rounded-xl bg-white p-4 ${isInteractive ? "cursor-pointer" : ""}`}
        onClick={handleIsFlipped}
      />
    </CardFlip>
  );
}

export default Card;
