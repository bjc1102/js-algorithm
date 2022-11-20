/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 *
 * 로봇이 왼쪽 상단 모서리 0, 0에서 시작해서 오른쪽 하단 모서리 지점인 m -1  n -1 지점까지 이동한다고 한다.
 *
 * 로봇은 아래, 오른쪽만 이동할 수 있다고 가정한다.
 *
 * 잘 생각해보면 [i][j]는 그전까지 올 수 있는 방향들의 합과 같다
 *
 *
 * 이때 도착할 수 있는 모든 경우의 수를 구해라
 * DFS => Run Time exceeded
 */
var uniquePaths = function (m, n) {
  let answer = 0;
  const dy = Array.from({ length: m }, () => Array(n).fill(0));

  if (m === 1 || n === 1) return 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) dy[i][j] = 1;
      else {
        dy[i][j] = dy[i - 1][j] + dy[i][j - 1];
      }
    }
  }
  return dy[m - 1][n - 1];

  //   function DFS(row, col) {
  //     if (row === m - 1 && col === n - 1) answer += 1;
  //     else {
  //       if (row < m) DFS(row + 1, col);
  //       if (col < n) DFS(row, col + 1);
  //     }
  //   }

  //   DFS(0, 0);
};
