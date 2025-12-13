import React from "react";
import { useState } from "react";

function Home() {
  // const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <>
      <div className="flex justify-around m-4">
        <div>
          <div className="ml-8 font-bold text-5xl">0</div>
          <div className="text-xl font-bold">Total Score</div>
        </div>
        <div>
          <ul className="flex text-lg space-x-6 mt-4">
            <li
              className="border-2 py-1 px-3 cursor-pointer"
              onClick={(e) => setSelectedNumber(e.target.value)}
            >
              1
            </li>
            {console.log(selectedNumber)}
            <li
              className="border-2 py-1 px-3 cursor-pointer"
              onClick={(e) => setSelectedNumber(e.target.value)}
            >
              2
            </li>
            <li
              className="border-2 py-1 px-3 cursor-pointer"
              onClick={() => setSelectedNumber(value)}
            >
              3
            </li>
            <li
              className="border-2 py-1 px-3 cursor-pointer"
              onClick={() => setSelectedNumber(value)}
            >
              4
            </li>
            <li
              className="border-2 py-1 px-3 cursor-pointer"
              onClick={() => setSelectedNumber(value)}
            >
              5
            </li>
            <li
              className="border-2 py-1 px-3 cursor-pointer"
              onClick={() => setSelectedNumber(value)}
            >
              6
            </li>
          </ul>
          {/* <div>
            {arrNumber.map((value, i) => {
              <li key={i} className="text-xl ">
                {value}
              </li>;
            })}
          </div> */}
          <br />
          <div className="font-bold text-lg relative start-30">
            Select Number
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
