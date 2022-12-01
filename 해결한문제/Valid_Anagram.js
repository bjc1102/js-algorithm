/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (const char of s) map.set(char, (map.get(char) || 0) + 1);

  for (const char of t) {
    const number = map.get(char);
    if (number === undefined) return false;
    if (number - 1 === 0) map.delete(char);
    else {
      map.set(char, number - 1);
    }
  }

  return map.size === 0;
};
