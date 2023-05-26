/**
 * @param {string} s
 * @return {number}
 *
 * 문자열이 주어질 때
 * 연결되는 문자열 중에서 반복되는 문자없이 가장 긴 문자열을 반환해라
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let lt = 0;
  for (let rt = 0; rt < s.length; rt++) {
    const char = s[rt];
    map.set(char, (map.get(char) || 0) + 1);
    if (map.get(char) > 1) {
      while (map.get(char) !== 1) {
        map.set(s[lt], map.get(s[lt]) - 1);
        lt++;
      }
    }
    max = Math.max(rt - lt + 1, max);
  }
  return max;
};
