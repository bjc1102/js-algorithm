/**
 * @param {number[]} nums
 * @return {number}
 *
 * 배열 원소들 중 가장 큰 값을 가지는 연속 부분 배열을 리턴해라 X
 * 값을 리턴해라 최댓값
 */
var maxSubArray = function (nums) {
  let prev = 0;
  let answer = Number.MIN_SAFE_INTEGER;

  for (const num of nums) {
    // 이전값들에 대해서 정보를 저장하고 있어야한다 -> 전체 nums에서 연속된 배열이어야하기 때문이다.
    // 따라서 prev값이 현재 값을 포함한 연속된 배열이 더 큰지 아니면 단순히 현재 들어오는 값 하나가 더 큰지를 비교해서
    // 연속된 배열의 크기와 단순히 배열 원소 하나의 크기를 비교해서 최댓값을 찾는게 문제이다
    prev = Math.max(prev + num, num);
    answer = Math.max(answer, prev);
  }

  return answer;
};
