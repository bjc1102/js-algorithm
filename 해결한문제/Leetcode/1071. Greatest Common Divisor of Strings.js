/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}

 str1,str2와 나누었을 때 나누어 떨어지는 문자열을 구해라
 */

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  // b가 a보다 크다면 자리가 바뀐다. 아니면 나누어 떨어짐
  return gcd(b, a % b);
}

var gcdOfStrings = function (str1, str2) {
  //반복되는 문자열인지 체크해야한다
  if (str1 + str2 !== str2 + str1) return "";
  const min = gcd(str1.length, str2.length);

  return str1.substring(0, min);
};
