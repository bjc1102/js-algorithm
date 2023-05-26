/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *
 * 리턴하지마라
 */
var reverseString = function (s) {
  let lt = 0;

  while (lt < s.length - 1 - lt) {
    [s[lt], s[s.length - lt - 1]] = [s[s.length - lt - 1], s[lt]];
    lt++;
  }
};
