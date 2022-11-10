/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 두개를 더해서 일치하는 target과 일치하는 인덱스를 리턴한다
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  // 해쉬로 풀면 조금 더 빠를 수 있다고 한다
  // target - index가 현재 배열에 있는지 확인 있으면 리턴
};
