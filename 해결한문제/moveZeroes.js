/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 리턴 하지말고 nums를 활용할 것
 *
 * 복사본을 만들지않고 0을 맨 뒤로 옮기기
 *
 *  이떄 0이 아닌 원소들의 배열 순서는 유지되어야 한다
 */
var moveZeroes = function (nums) {
  const len = nums.length;
  let lt = 0;
  let cnt = 0;

  while (cnt < len) {
    if (nums[lt] === 0) nums.push(nums.splice(lt, 1));
    else lt += 1;
    cnt += 1;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 리턴 하지말고 nums를 활용할 것
 *
 * 복사본을 만들지않고 0을 맨 뒤로 옮기기
 *
 *  이떄 0이 아닌 원소들의 배열 순서는 유지되어야 한다
 */
var moveZeroes = function (nums) {
  let lt = 0;
  let rt = lt + 1;

  while (rt < nums.length) {
    if (nums[lt] !== 0) {
      lt += 1;
      rt += 1;
    } else {
      // lt는 0에 묶어놓고 rt를 0이 아닐때까지 확장
      if (nums[rt] !== 0) {
        [nums[lt], nums[rt]] = [nums[rt], nums[lt]];
        lt += 1;
      }
      rt += 1;
    }
  }
};
