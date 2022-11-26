/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;

  while (lt <= rt) {
    const mid = Math.round((rt + lt) / 2);
    console.log(mid);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return lt;
};

// console.log(searchInsert([1, 3, 5, 6], 2));
