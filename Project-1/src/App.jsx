import React from "react";
import amazon from "./assets/amazon.png";
import Shoe from "./assets/hero-image.png";
import flipkart from "./assets/flipkart.png";

function App() {
  return (
    <>
      <div className="p-2 m-2">
        <nav className="flex justify-around h-12 text-center  shadow-xl">
          <div className="text-2xl font-black">Logo</div>
          <div>
            <ul className="flex space-x-20 text-lg">
              <li>Menu</li>
              <li>Location</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <button className="bg-red-400 rounded-lg  px-3 py-1 text-lg font-bold hover:bg-red-500 active:bg-red-400  cursor-pointer ">
              Login
            </button>
          </div>
        </nav>

        {/* page */}

        <div className="flex m-10 justify-evenly">
          <div>
            <div className="text-7xl font-bold ">
              YOUR FEET <br /> DESERVE <br /> THE BEST
            </div>
            <br />
            <div className="">
              Your feet deserve the best and we're here to <br /> help you eith
              our shoes.Your feet deserve <br />
              the best and we're here to help you eith our <br /> shoes.
            </div>
            <br />
            <div className="space-x-12">
              <button className="bg-red-400 px-3 py-1  rounded-lg cursor-pointer hover:bg-red-500 ">
                Shop now
              </button>
              <button className="border-2 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-100">
                Catagory
              </button>
            </div>
            <br />
            <div>
              <div>Also available On</div>
              <br />
              <div className="flex space-x-8">
                <img src={flipkart} />
                <img src={amazon} />
              </div>
            </div>
          </div>
          <div>
            <img src={Shoe} className="h-130 w-130" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
