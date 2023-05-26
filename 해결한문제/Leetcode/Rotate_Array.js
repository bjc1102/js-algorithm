/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 리턴하지 말것
 *
 * nums 배열을 k만큼 회전시킨다
 *
 * 단순 while문을 사용했을 떄는  시간초과가 뜬다
 *
 * 원형큐? 배열의 시작지점과 끝 지점만 바꿔준다
 */
var rotate = function (nums, k) {
  //   let bit = 0;
  //   k = k % nums.length;
  //   let count = 0;
  //   while (count < k) {
  //     nums.unshift(nums.pop());
  //     count += 1;
  //   }

  const temp = [...nums]; // 새로운 배열을 만들어서

  // 굳이 k번만큼 돌릴 필요 없이 k번 돌렸을 때 위치를 계산하면 된다.
  // 이때 k가 nums배열보다 큰 경우 다시 원상태로 돌아올 경우가 있으니
  // k의 나눈 나머지를 계산해서 위치를 계산한다
  for (let i = 0; i < nums.length; i++) {
    const index = (i + k) % nums.length;
    nums[index] = temp[i];
  }
};
