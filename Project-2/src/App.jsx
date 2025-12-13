import { useState } from "react";
import StartGame from "./components/StartGame";
import Home from "./components/Home";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Home /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
