/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 k 길이만큼의 최대 모음을 구해라
 */
var maxVowels = function (s, k) {
  const vowel = new Set(["a", "e", "i", "o", "u"]);
  let output = 0;

  for (let i = 0; i < k; i++) {
    if (vowel.has(s[i])) output++;
  }

  let max = output;

  for (let i = k; i < s.length; i++) {
    if (vowel.has(s[i])) output++;
    if (vowel.has(s[i - k])) output--;
    max = Math.max(output, max);
  }

  return max;
};
