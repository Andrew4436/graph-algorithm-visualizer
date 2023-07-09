import React, { useRef, useState } from "react";
import BFS from "../Algorithms/BFS";
import DFS from "../Algorithms/DFS";

function Nav({
  start,
  setStart,
  target,
  setTarget,
  gridRows,
  gridCols,
  algorithm,
  setAlgorithm,
  algorithmSpeed,
  setAlgorithmSpeed,
}) {
  const algorithmInputRef = useRef();
  const algorithmSpeedInputRef = useRef();
  const [changePos, setChangePos] = useState(false);
  const startRow = useRef();
  const startCol = useRef();
  const targetRow = useRef();
  const targetCol = useRef();

  function startAlgorithmAnimation(algorithm) {
    //it will return flat array of gridContainers childrens
    const gridContainer = document.getElementById("grid-container").children;

    const cells = [];
    let rowIndex = 0;
    let colIndex = 0;

    //make gridContainer children (grid cells) into a matrix array.
    for (let i = 0; i < gridContainer.length; i++) {
      if (!cells[rowIndex]) {
        cells[rowIndex] = [];
      }

      cells[rowIndex][colIndex] = gridContainer[i];
      colIndex++;

      if (colIndex === gridCols) {
        colIndex = 0;
        rowIndex++;
      }
    }

    // nodes is the algorithm visualization and founPath is the path/shortest path algorithm found
    let nodes, foundPath;

    //set nodes and foundPath differently depending on what algorithm we used
    if (algorithm === "Breadth first search") {
      const { res, path } = BFS(cells, start, target);
      nodes = res;
      foundPath = path;
     } else if (algorithm === "Depth first search") {
      const { res, path } = DFS(cells, start, target);

      nodes = res;
      foundPath = path;
    }

    //mark visited node
    for (let i = 0; i < nodes.length; i++) {
      const { row, col } = nodes[i];
      //we dont want to mark start or target element so we skip the iteration if we are on neither of them
      if (
        (row === start.row && col === start.col) ||
        (row === target.row && col === target.col)
      )
        continue;

      setTimeout(() => {
        cells[row][col].classList = "";
        cells[row][col].classList.add("visited");
      }, i * algorithmSpeed);
    }

    //change the path found into different color
    setTimeout(() => {
      for (let i = 0; i < foundPath.length; i++) {
        const { row, col, direction } = foundPath[i];
        //we dont want to mark start or target element so we skip the iteration if we are on neither of them
        if (
          (row === start.row && col === start.col) ||
          (row === target.row && col === target.col)
        )
          continue;
        setTimeout(() => {
          //put arrows in the path so we know which direction its going.
          //we set current cells arrow (direction) to next cells arrow (direction), because if we dont, there is a weird bug where arrows are one step behind.
          if (foundPath[i + 1] !== undefined) {
            //destructure next cells row, col, and direction and re-name them into a seperate variable
            const {
              row: nextRow,
              col: nextCol,
              direction: nextDirection,
            } = foundPath[i + 1];
            cells[row][col].innerText = nextDirection;
          }
          //add classList to the path.
          cells[row][col].classList = "";
          cells[row][col].classList.add("shortest-path");
        }, i * 100);
      }
    }, nodes.length * algorithmSpeed);
  }

  function changeAlgorithm() {
    setAlgorithm(algorithmInputRef.current.value);
  }

  function changeAlgorithmSpeed() {
    const value = algorithmSpeedInputRef.current.value;
    if (value === "Slow") {
      setAlgorithmSpeed(120);
    } else if (value === "Medium") {
      setAlgorithmSpeed(70);
    } else {
      setAlgorithmSpeed(30);
    }
  }

  return (
    <nav>
      <div id="nav-top">
        <select
          id="change-algorithm"
          ref={algorithmInputRef}
          onChange={changeAlgorithm}
        >
          <option>Breadth first search</option>
          <option>Depth first search</option>
        </select>

        <button
          id="start-btn"
          onClick={() => startAlgorithmAnimation(algorithm)}
        >
          Start Algorithm
        </button>

        <select
          id="change-algorithm-speed"
          ref={algorithmSpeedInputRef}
          onChange={changeAlgorithmSpeed}
        >
          <option>Slow</option>
          <option>Medium</option>
          <option>Fast</option>
        </select>

        <div id="change-pos-container">
          <div id="change-start-pos">
            <label htmlFor="startRow">start node row:</label>
            <input
              id="startRow"
              ref={startRow}
              type="number"
              min="1"
              max="25"
              defaultValue="13"
              onChange={() => {
                let row = startRow.current.value;
                let col = startCol.current.value;
                if (+startRow.current.value > 25) {
                  row = 25;
                }
                if (+startRow.current.value < 1) {
                  row = 1;
                }
                if (+startCol.current.value > 35) {
                  col = 35;
                }
                if (+startCol.current.value < 1) {
                  col = 1;
                }
                setStart({
                  row: +row - 1,
                  col: +col - 1,
                  direction: "",
                });
              }}
            />
            <label htmlFor="startCol">start node col:</label>
            <input
              id="startCol"
              ref={startCol}
              type="number"
              min="1"
              max="35"
              defaultValue="5"
              onChange={() => {
                let row = startRow.current.value;
                let col = startCol.current.value;
                if (+startRow.current.value > 25) {
                  row = 25;
                }
                if (+startRow.current.value < 1) {
                  row = 1;
                }
                if (+startCol.current.value > 35) {
                  col = 35;
                }
                if (+startCol.current.value < 1) {
                  col = 1;
                }
                setStart({
                  row: +row - 1,
                  col: +col - 1,
                  direction: "",
                });
              }}
            />
          </div>

          <div id="change-target-pos">
            <label htmlFor="targetRow">target node row:</label>
            <input
              id="targetRow"
              ref={targetRow}
              type="number"
              min="1"
              max="25"
              defaultValue="13"
              onChange={() => {
                let row = targetRow.current.value;
                let col = targetCol.current.value;
                if (+targetRow.current.value > 25) {
                  row = 25;
                }
                if (+targetRow.current.value < 1) {
                  row = 1;
                }
                if (+targetCol.current.value > 35) {
                  col = 35;
                }
                if (+targetCol.current.value < 1) {
                  col = 1;
                }
                setTarget({
                  row: +row - 1,
                  col: +col - 1,
                  direction: "",
                });
              }}
            />
            <label htmlFor="targetCol">target node col:</label>
            <input
              id="targetCol"
              ref={targetCol}
              type="number"
              min="1"
              max="35"
              defaultValue="31"
              onChange={() => {
                let row = targetRow.current.value;
                let col = targetCol.current.value;
                if (+targetRow.current.value > 25) {
                  row = 25;
                }
                if (+targetRow.current.value < 1) {
                  row = 1;
                }
                if (+targetCol.current.value > 35) {
                  col = 35;
                }
                if (+targetCol.current.value < 1) {
                  col = 1;
                }
                setTarget({
                  row: +row - 1,
                  col: +col - 1,
                  direction: "",
                });
              }}
            />
          </div>
        </div>

        <button id="clear-btn" onClick={() => window.location.reload()}>
          Clear board
        </button>
      </div>
    </nav>
  );
}

export default Nav;
