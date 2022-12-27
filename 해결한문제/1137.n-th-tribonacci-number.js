/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const dy = Array.from({ length: n + 4 }, () => 0);

  dy[0] = 0;
  dy[1] = 1;
  dy[2] = 1;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1];
  }

  return dy[n];
};
// @lc code=end
