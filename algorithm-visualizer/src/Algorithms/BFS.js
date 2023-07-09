function BFS(grid, start, target) {
  const visited = new Set();

  const queue = [{ node: start, path: [start] }];
  const res = [];

  while (queue.length > 0) {
    const { node, path } = queue.shift();
    let { row, col } = node;

    if (visited.has(`${row},${col}`)) continue;
    visited.add(`${row},${col}`);
    res.push({ row: row, col: col });

    if (row === target.row && col === target.col) {
      return { res: res, path: path };
    }

    // Check adjacent cells and enqueue if within grid bounds
    if (row - 1 >= 0) {
      queue.push({
        node: { row: row - 1, col: col },
        path: [...path, { row: row - 1, col: col, direction: "🡹" }],
      });
    }
    if (row + 1 < grid.length) {
      queue.push({
        node: { row: row + 1, col: col },
        path: [...path, { row: row + 1, col: col, direction: "🡻" }],
      });
    }
    if (col - 1 >= 0) {
      queue.push({
        node: { row: row, col: col - 1 },
        path: [...path, { row: row, col: col - 1, direction: "🡸" }],
      });
    }
    if (col + 1 < grid[0].length) {
      queue.push({
        node: { row: row, col: col + 1 },
        path: [...path, { row: row, col: col + 1, direction: "🡺" }],
      });
    }
  }
}

export default BFS;
