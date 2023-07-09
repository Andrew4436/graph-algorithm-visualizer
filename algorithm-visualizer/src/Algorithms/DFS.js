function DFS(grid, start, target) {
  const visited = new Set();
  const stack = [{ node: start, path: [start] }];

  const res = [];

  while (stack.length > 0) {
    const { node, path } = stack.pop();
    const { row, col } = node;

    if (visited.has(`${row},${col}`)) continue;
    visited.add(`${row},${col}`);
    res.push({ row: row, col: col });

    if (row === target.row && col === target.col) {
      return { res: res, path: path };
    }

    if (row + 1 < grid.length) {
      stack.push({
        node: { row: row + 1, col: col },
        path: [...path, { row: row + 1, col: col, direction: "🡻" }],
      });
    }
    if (row - 1 >= 0) {
      stack.push({
        node: { row: row - 1, col: col },
        path: [...path, { row: row - 1, col: col, direction: "🡹" }],
      });
    }
    if (col - 1 >= 0) {
      stack.push({
        node: { row: row, col: col - 1 },
        path: [...path, { row: row, col: col - 1, direction: "🡸" }],
      });
    }
    if (col + 1 < grid[0].length) {
      stack.push({
        node: { row: row, col: col + 1 },
        path: [...path, { row: row, col: col + 1, direction: "🡺" }],
      });
    }
  }
}

export default DFS;
