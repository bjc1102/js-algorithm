/**
 * @param {number[]} nums
 * @return {number}
 *
 * 피봇인덱스를 구해서 왼쪽 피봇인덱스를 리턴해라
 *
 * 해당값을 기준으로 왼쪽과 오른쪽의 합이 같아야한다. 해당 인덱스는 포함되지 않음
 */
var pivotIndex = function (nums) {
  let sum = 0;
  const rightSum = [0];
  const lefttSum = [0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    lefttSum.push(sum);
  }

  sum = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    sum += nums[i];
    rightSum.unshift(sum);
  }

  for (let i = 0; i <= nums.length - 1; i++) {
    console.log(lefttSum[i], rightSum[i + 1]);
    if (lefttSum[i] === rightSum[i + 1]) return i;
  }

  return -1;
};

console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
