/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let index = -1;

  for (let i = 0; i < s.length; i++) {
    const check = index;
    for (let j = index + 1; j < t.length; j++) {
      if (s[i] === t[j]) {
        index = j;
        break;
      }
    }
    if (index === check) return false; // 찾지 못했다.
  }

  return true;
};

console.log(isSubsequence("ace", "abcde"));
