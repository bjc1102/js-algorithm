/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dy = Array.from({ length: cost.length + 1 }, () => 0);
  dy[0] = cost[0];
  dy[1] = cost[1];
  let sum = 0;

  for (let i = 2; i <= cost.length; i++) {
    const level = cost[i] ?? 0;
    dy[i] = level + Math.min(dy[i - 1], dy[i - 2]);
  }

  return dy[cost.length];
};
// @lc code=end
