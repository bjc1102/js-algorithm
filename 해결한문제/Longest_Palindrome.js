/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  let answer = 0;
  for (const char of s) map.set(char, (map.get(char) || 0) + 1);

  for (const key of map.keys()) {
    const count = map.get(key);
    if (count % 2 === 0) {
      answer += count;
      map.delete(key);
    } else answer += count - 1;
  }

  return map.size > 0 ? answer + 1 : answer;
};
