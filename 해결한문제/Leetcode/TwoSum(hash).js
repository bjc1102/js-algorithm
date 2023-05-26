/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 숫자 배열이 주어지는데, 이 배열안에 숫자 2가지를 조합하여 타겟넘버를 찾는게 목적이다.
 *
 * 타겟의 현재 변수를 뺴준다.
 * 만약 뺴준 변수가 안에 있으면 그대로 리턴하면되고 없으면 넣고 빠진다
 *
 * map은 nums[i], index로 구성
 */
var twoSum = function (nums, target) {
  const answer = [];
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      answer.push(map.get(target - nums[i]), i);
      return answer;
    } else {
      map.set(nums[i], i);
    }
  }
};
