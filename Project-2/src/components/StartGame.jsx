import React from "react";
import image from "../assets/dices.png";

function StartGame(prop) {
  return (
    <>
      <div className="flex justify-center m-2">
        <div className="mt-12">
          <img src={image} />
        </div>
        <div className="content-center">
          <h1 className="text-6xl font-bold ">Dice Game</h1>
          <br />
          <button
            className="bg-black text-white py-2 px-4 rounded-lg relative start-30 cursor-pointer active:bg-amber-300 active:text-black"
            onClick={prop.toggle}
          >
            Play Now
          </button>
        </div>
      </div>
    </>
  );
}

export default StartGame;
