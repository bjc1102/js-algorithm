/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = Array.from({ length: nums.length }, () => 1);
  let left = 1;
  let right = 1;

  // 왼쪽에 있는 것들의 곱 구하기
  // [1,1,2,6]

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left;
    left = nums[i] * left;
  }

  // 오른쪽에 있는 것들의 곱 구하기
  // [24,12,4,1]
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = right * answer[i];
    right = right * nums[i];
  }

  return answer;
};
