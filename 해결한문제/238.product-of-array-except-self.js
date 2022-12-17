/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * answer[i]는 nums[i]를 제외한 모든 nums[i] 원소의 곱이다.
 * answer[i]를 구하려면 nums[i]의 prefix와 postfix를 서로 곱하면 된다.
 */
var productExceptSelf = function (nums) {
  const answer = [];
  let left = 1;
  let right = 1;

  //prefix 구하기
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left;
    left = left * nums[i];
  }

  //postfix 구하기
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right = right * nums[i];
  }

  return answer;
};
// @lc code=end
