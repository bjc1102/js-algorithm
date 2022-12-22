/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * nums 배열이 주어질 때 모든 순열을 구하여라
 * dfs
 */
var permute = function (nums) {
  const map = new Map();
  const temp = [];
  const answer = [];

  const dfs = () => {
    if (temp.length === nums.length) return answer.push([...temp]);
    for (let i = 0; i < nums.length; i++) {
      if (!map.get(i)) {
        map.set(i, 1);
        temp.push(nums[i]);
        dfs();
        temp.pop();
        map.delete(i);
      }
    }
  };

  dfs();

  return answer;
};
// @lc code=end
