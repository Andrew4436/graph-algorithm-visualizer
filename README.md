# DFS/BFS Graph Traversal Visualizer

An interactive tool that visually animates Depth-First Search (DFS) and Breadth-First Search (BFS) to find the shortest path between two points on a grid, in optimal O(n) time.

# Demo:

https://github.com/user-attachments/assets/3d23b6a8-8a89-4468-8d2f-35e948783a49

# What it does:
This visualizer takes a grid with a start and end point (and optional obstacles), then animates two different pathfinding algorithms so you can see exactly how each one explores the grid:


DFS dives down one path as far as it can go before backtracking, shown as an animated recursive path.
BFS expands outward evenly in all directions, layer by layer, until it reaches the target — shown as a spreading search area.


Watching both side by side makes it easy to see why BFS guarantees the shortest path while DFS does not.

# Features:
- Real-time animation of both DFS and BFS traversal
- Shortest-path computation in optimal O(n) time
- Clear visual distinction between DFS's recursive dive and BFS's expanding frontier
- Built from scratch with no external algorithm libraries


# Tech Stack
- React
- JavaScript
- CSS
