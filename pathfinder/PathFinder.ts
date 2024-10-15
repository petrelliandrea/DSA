// Definizione del tipo Point
interface Point {
  x: number;
  y: number;
}

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

function walk(maze: string[][], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // Aggiunto controllo per limiti di x e y nel labirinto
  if (curr.x < 0 || curr.y < 0 || curr.x >= maze[0].length || curr.y >= maze.length) {
    return false;
  }

  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  // Segno la cella come vista prima di entrare nella ricorsione
  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i];
    // Passo alle nuove coordinate e controllo il risultato ricorsivamente
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  // Backtracking: rimuovo l'ultima cella visitata se la ricorsione non trova un percorso
  path.pop();
  return false;
}

export default function solve(maze: string[][], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; ++i) {
    // Specifico che l'array creato è di boolean
    seen.push(new Array<boolean>(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}

