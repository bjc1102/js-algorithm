/**
 * @param {string} s
 * @return {string}
 * 만큼 문자를 제거한다
 */
var removeStars = function (s) {
  const stack = [];

  for (const char of s) {
    if (char === "*") stack.pop();
    else stack.push(char);
  }

  return stack.join("");
};
