var longestSubarray = function (nums) {
  let left = 0;
  let right = 0;
  let max = 0;
  let count = 1;

  while (right < nums.length) {
    if (nums[right] === 0) {
      count--;
    }

    while (count < 0) {
      if (nums[left] === 0) {
        count++;
      }
      left++;
    }

    max = Math.max(max, right - left);
    right++;
  }

  return max;
};
