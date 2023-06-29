/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 이진배열이 주어질 때 k만큼 뒤집어서 1이 가장 긴 배열을 찾아라

 계속 확장하다가 k값의 범위를 넘으면 0이 나갈때까지 축소한다. 이후 다시 늘림
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 이진배열이 주어질 때 k만큼 뒤집어서 1이 가장 긴 배열을 찾아라

 계속 확장하다가 k값의 범위를 넘으면 0이 나갈때까지 축소한다. 이후 다시 늘림
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let max = Number.MIN_SAFE_INTEGER;

  while (right < nums.length) {
    if (nums[right] === 0) k -= 1;
    while (k < 0) {
      if (nums[left] === 0) k += 1;
      left++;
    }
    max = Math.max(max, right - left + 1);
    // 처음 시작할 때 0을 확인하기 위해 마지막에 더해준다
    right += 1;
  }
  return max;
};
