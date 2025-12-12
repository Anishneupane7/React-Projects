import React from "react";
import image from "../assets/dices.png";

function StartGame() {
  return (
    <>
      <div className="flex justify-center space-x-8 items-center  m-5">
        <div className=" mt-8">
          <img src={image} />
        </div>
        <div>
          <h1 className="text-6xl font-bold">DICE GAME</h1>
          <br />

          <button className="bg-black py-2 px-4 rounded-xl relative start-30 text-white cursor-pointer active:bg-amber-500">
            Play Now
          </button>
        </div>
      </div>
    </>
  );
}

export default StartGame;
