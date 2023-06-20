/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let answer = "";
  const max = Math.max(word1.length, word2.length);
  for (let i = 0; i < max; i++) {
    if (word1[i]) answer += word1[i];
    if (word2[i]) answer += word2[i];
  }

  return answer;
};
