/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

 0이 아닌 요소의 상대적인 순서를 유지하면서 0을 맨 뒤로 보내기
 현재 자리가 0일때 다음 자리와 순서 바꾸기 or
 0만 계산해서 뒤에 추가하기
 */
var moveZeroes = function (nums) {
  let anchor = 0; // 0이 아닌 요소를 채울 인덱스를 나타내는 앵커 변수

  // 0이 아닌 요소들을 앵커를 통해 앞쪽에 순차적으로 배치
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[anchor] = nums[i];
      anchor++;
    }
  }

  // 나머지 요소들을 0으로 채움
  while (anchor < nums.length) {
    nums[anchor] = 0;
    anchor++;
  }
};
