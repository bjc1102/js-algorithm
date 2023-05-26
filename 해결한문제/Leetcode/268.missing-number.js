/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * 잃어버린 숫자 찾기
 *
 * 반드시 하나는 잃어버린 숫자이다
 * 0~nums.length까지 있고 주어진 nums의 전체 합에서 앞선 length까지의 합을 빼보면 된다
 */
var missingNumber = function (nums) {
  const sum = nums.length * ((nums.length + 1) / 2);
  const missingSum = nums.reduce((prev, curr) => prev + curr, 0);

  return sum - missingSum;
};
// @lc code=end
