import { useState } from "react";
import StartGame from "./components/StartGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StartGame />
    </>
  );
}

export default App;
