/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let answer = 0;
  const m = grid.length;
  const n = grid[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  //수평, 수직으로만 연결되기떄문에 대각은 포함하면 안된다

  const dfs = (x, y) => {
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === "1") {
        grid[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = 0;
        dfs(i, j);
        answer += 1;
      }
    }
  }

  console.log(grid);

  return answer;
};
// @lc code=end
