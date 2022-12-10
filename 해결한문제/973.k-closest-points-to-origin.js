/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const answer = points
    .sort((a, b) => {
      const p1 = a[0] * a[0] + a[1] * a[1];
      const p2 = b[0] * b[0] + b[1] * b[1];

      return p1 - p2;
    })
    .slice(0, k);

  return answer;
};
// @lc code=end
