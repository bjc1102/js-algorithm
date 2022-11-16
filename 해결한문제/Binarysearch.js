/**
 *
 * 이진탐색
 * 반으로 자른다 반으로 잘라서 탐색한다
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 */
var search = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;

  while (lt <= rt) {
    const center = parseInt((rt + lt) / 2);
    if (target === nums[center]) return center;
    else if (target > nums[center]) {
      lt = center + 1;
    } else {
      rt = center - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
