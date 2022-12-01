/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 이진탐색하기
 */
var search = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;

  while (lt <= rt) {
    const mid = parseInt((rt + lt) / 2);
    const iNumber = nums[mid];

    if (iNumber === target) return mid;
    if (iNumber > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return -1;
};
