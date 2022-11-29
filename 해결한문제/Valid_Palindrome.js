/**
 * @param {string} s
 * @return {boolean}
 *
 * 정규 표현식에 자주 막힌다.
 * 그리고 reverse는 원본을 수정하게 되니 주의해야 한다
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (str !== str.split("").reverse().join("")) return false;
  return true;
};
