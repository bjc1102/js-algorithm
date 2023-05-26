/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 *
 * 썩어있는 오렌지를 중심으로 오렌지가 시간마다 썩어간다
 * 이떄 모든 오렌지가 썩는 시간을 구하여라
 * 오렌지는 수평,수직에 있는 부분만 관련되어있고 이때 모든 오렌지가 썩는게 불가능하다면 -1을 리턴한다
 *
 * bfs를 돌리는데 1의 갯수도 같이 카운팅해야한다
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let one = 0;
  let answer = 0;

  //썩은 오렌지 먼저 찾기
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) one += 1;
    }
  }

  console.log(queue);

  //bfs 돌리기 레벨단위 탐색
  while (queue.length > 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      console.log(x, y);
      for (let j = 0; j < dx.length; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
          grid[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
    if (queue.length > 0) {
      answer += 1;
      one -= queue.length;
    }
  }

  return answer;
};
// @lc code=end
