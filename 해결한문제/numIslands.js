/**
 * @param {character[][]} grid
 * @return {number}
 *
 * 섬 갯수찾기
 */
var numIslands = function (grid) {
  let answer = 0;
  const m = grid.length;
  const n = grid[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  // 대각은 포함되면 안된다..

  function DFS(cx, cy) {
    for (let i = 0; i < dx.length; i++) {
      console.log(nx, ny);
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === "1") {
        grid[nx][ny] = "0";
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = 0;
        DFS(i, j);
        answer += 1;
      }
    }
  }

  return answer;
};
