/**
 * @param {number[][]} grid
 * @return {number[]}
 *
 * 공이 떨어지는 부분을 구한다
 *
 * 1이라면 \
 * -1이라면 /
 *
 * 따라서 1과 -1 속으로 빠지거나
 * 밖으로 나가버리면 -1을 리턴
 */
const findBall = function (grid) {
  const answer = [];
  const len = grid.length;

  /**
   * @param {number} p
   * @param {number} L
   *
   * p는 시작점 L은 현재 위치임
   */
  function DFS(L, p) {
    if (L >= len) {
      return p;
    } else {
      if (grid[L][p] === 1 && p + 1 < grid[0].length && grid[L][p + 1] !== -1)
        return DFS(L + 1, p + 1);
      if (grid[L][p] === -1 && p - 1 >= 0 && grid[L][p - 1] !== 1)
        return DFS(L + 1, p - 1);
      return -1;
    }
  }
  for (let i = 0; i < grid[0].length; i++) answer.push(DFS(0, i));

  return answer;
};

console.log(
  findBall([
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
  ])
);
