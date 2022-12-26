/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let lt = 0;
  let rt = nums.length - 1;
  let i = 0;

  const swap = (pointer, index, value) => {
    const temp = nums[pointer];
    nums[pointer] = value;
    nums[index] = temp;
  };

  // 2만 전부 뒤쪽으로 몰면 된다
  while (i <= rt) {
    const n = nums[i];
    console.log(n);

    if (n === 2) {
      swap(rt, i, 2);
      rt -= 1;
      continue;
    } else if (n === 0) {
      swap(lt, i, 0);
      lt += 1;
    }
    i += 1;
  }
};

// @lc code=end
