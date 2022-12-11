/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 세 숫자를 뽑아서 0을 만드는 경우를 출력하기
 * DFS?
 */
// var threeSum = function (nums) {

//   const answer = [];
//   const tmp = [];
//   const len = nums.length;

//   const findUniqueArray = (answerArr, tempArr) => {
//     const temp = tempArr.join(",");

//     for (let i = 0; i < answerArr.length; i++) {
//       const check = answerArr[i].join(",");
//       if (check === temp) return false;
//     }

//     return true;
//   };

//   const DFS = (start, sum) => {
//     if (tmp.length === 3) {
//       const sort = [...tmp].sort((a, b) => a - b);
//       if (sum === 0 && findUniqueArray(answer, sort)) answer.push(sort);
//       return;
//     } else {
//       for (let i = start; i < len; i++) {
//         tmp.push(nums[i]);
//         DFS(i + 1, sum + nums[i]);
//         tmp.pop();
//       }
//     }
//   };

//   DFS(0, 0);

//   return answer;
// };
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const answer = [];
  if (nums.length < 3) return answer;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return answer; // -값이 나오지않으면 0을 만들 수 없으므로 시작점이 양수가 되는 순간 끝낸다
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      //중복값이 있는 부분은 넘어간다.
      if (nums[i] + nums[start] + nums[end] === 0) {
        answer.push([nums[i], nums[start], nums[end]]);
        while (nums[start] === nums[start + 1]) start++;
        while (nums[end] === nums[end - 1]) end--;
        start++;
        end--;
      } else if (nums[i] + nums[start] + nums[end] < 0) start += 1;
      else end -= 1;
    }
    //i도 중복을 제거해야한다.
    while (i < nums.length - 3 && nums[i] === nums[i + 1]) {
      i += 1;
    }
  }
  return answer;
};
// @lc code=end
