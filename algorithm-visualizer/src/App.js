import { useState, useEffect } from "react";
import "./style.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  const [start, setStart] = useState({ row: 12, col: 4, direction: "" });
  const [target, setTarget] = useState({ row: 12, col: 30, direction: "" });
  const [algorithm, setAlgorithm] = useState("Breadth first search");
  const [algorithmSpeed, setAlgorithmSpeed] = useState(120);
  const gridRows = 25;
  const gridCols = 35;

  return (
    <>
      <Nav
        start={start}
        setStart={setStart}
        target={target}
        setTarget={setTarget}
        gridRows={gridRows}
        gridCols={gridCols}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        algorithmSpeed={algorithmSpeed}
        setAlgorithmSpeed={setAlgorithmSpeed}
      />
      <Home
        start={start}
        target={target}
        gridRows={gridRows}
        gridCols={gridCols}
      />
    </>
  );
}

export default App;
