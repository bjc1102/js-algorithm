/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map();
  map.set("}", "{");
  map.set("]", "[");
  map.set(")", "(");

  const stack = [];

  for (const char of s) {
    if (map.has(char)) {
      if (map.get(char) !== stack.pop()) return false;
    } else stack.push(char);
  }

  return stack.length === 0;
};
