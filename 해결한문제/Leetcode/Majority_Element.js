/**
 * @param {number[]} nums
 * @return {number}
 *
 * 가장 많이 나온 원소의 갯수를 찾는 문제이다.
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (const char of nums) map.set(char, (map.get(char) || 0) + 1);

  let answer = nums[0];

  for (const key of map.keys())
    if (map.get(key) > map.get(answer)) answer = key;

  return answer;
};
