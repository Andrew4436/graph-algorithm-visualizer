import React, { useEffect, useState } from "react";

function Home({ start, target, gridRows, gridCols }) {
  //whenever we update start or target, we rerender the whole grid again (could be improved to be more efficient)
  useEffect(() => {
    addGrid();
  }, [start, target]);

  const [grid, setGrid] = useState([]);

  function addGrid() {
    const grid = [];
    for (let r = 0; r < gridRows; r++) {
      const cells = [];
      for (let c = 0; c < gridCols; c++) {
        if (c === start.col && r === start.row) {
          cells.push("start");
        } else if (c === target.col && r === target.row) {
          cells.push("target");
        } else {
          cells.push(".");
        }
      }
      grid.push(cells);
    }
    setGrid(grid);
  }

  useEffect(() => {
    addGrid();
  }, []);

  return (
    <div id="home-container">
      <div
        id="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        }}
      >
        {grid.map((row, rowIdx) => {
          return row.map((col, colIdx) => {
            let className;
            if (col === "start") {
              className = "start";
            } else if (col === "target") {
              className = "target";
            } else {
              className = "grid-cells";
            }
            return (
              <div key={`${rowIdx},${colIdx}`} className={className}></div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Home;
