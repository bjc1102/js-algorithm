/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (const char of ransomNote) map.set(char, (map.get(char) || 0) + 1);

  for (const char of magazine) {
    const count = map.get(char);
    if (count === undefined) continue;
    if (count === 1) map.delete(char);
    else map.set(char, count - 1);
  }

  return map.size === 0;
};

console.log(canConstruct("abc", "abcdef"));
