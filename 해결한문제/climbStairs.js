/**
 * @param {number} n
 * @return {number}
 *
 * dp에서 유명한 계단 오르기문제
 */
var climbStairs = function (n) {
  const dy = Array.from({ length: n + 4 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i < n + 2; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  return dy[n];
};
