/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 *
 * 짝수만 더한다. 이때 queries 배열도 주어지는데 이 배열에서 값, 인덱스 순으로 주어진다.
 *
 * 해당 nums배열 인덱스에 더한 뒤 짝수만 더해준다
 */
var sumEvenAfterQueries = function (nums, queries) {
  const answer = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    const [value, index] = queries[i];
    const nowValue = nums[index] + value;

    if (nowValue % 2 !== 0) {
      if (nums[index] % 2 === 0) sum -= nums[index];
    } else {
      if (nums[index] % 2 === 0) sum += value;
      else sum += nowValue;
    }

    answer.push(sum);
    nums[index] = nowValue;
  }
  return answer;
};
