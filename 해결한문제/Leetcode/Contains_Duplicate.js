/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * 중복된 원소가 있는지 찾는 문제이다
 */
var containsDuplicate = function (nums) {
  const set = new Set([...nums]);

  return set.size !== nums.length;
};
