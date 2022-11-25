/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const answer = [];
  for (const num of nums) {
    answer.push(nums[num]);
  }

  return answer;
};
