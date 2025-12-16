import React from "react";
import image1 from "../assets/firebase.svg";

function NavBar() {
  return (
    <div className="h-[60px] bg-white my-4 rounded flex justify-center items-center gap-3 text-xl font-medium">
      <img src={image1} />
      <h1>Firebase Contact App</h1>
    </div>
  );
}

export default NavBar;
