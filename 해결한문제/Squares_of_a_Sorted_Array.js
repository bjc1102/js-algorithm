/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * 정렬된 배열이 주어질 때 이 배열의 원소를 제곱시켜 다시 정렬해라
 * nums엔 음수도 들어있다.
 */
var sortedSquares = function (nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));

  console.log(nums);
};
