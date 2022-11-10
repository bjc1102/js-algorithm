/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) return true;
    else map.set(num, 1);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
