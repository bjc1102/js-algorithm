/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");

  return words;
};
