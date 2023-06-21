/**
 * @param {number[]} nums
 * @return {boolean}

 이것도 마찬가지로 왼쪽일 때 큰값과 오른쪽일 때 큰값
 i < j < k and nums[i] < nums[j] < nums[k]가 성립해야한다
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;

  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      return true;
    }
  }

  return false;
};
