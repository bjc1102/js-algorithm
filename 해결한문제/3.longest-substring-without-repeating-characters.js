/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 *
 * 문자열에서 연속되는 문자 중 중복없이 가장 길게 표현되는 문자의 길이를 구하여라
 *
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let lt = 0;
  const map = new Map();

  for (let rt = 0; rt < s.length; rt++) {
    if (map.has(s[rt])) {
      // 이미 중복된 숫자라면
      while (map.has(s[rt])) {
        map.delete(s[lt]);
        lt += 1;
      }
    }
    map.set(s[rt], 1);

    max = Math.max(max, rt - lt + 1);
  }
  return max;
};
// @lc code=end
