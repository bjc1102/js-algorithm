/**
 * @param {number[]} arr
 * @return {boolean}
각 문자의 발생 횟수가 유니크한지 묻는 문제이다.

해쉬를 따로 만들어서 횟수를 계산한 뒤 사이즈를 비교해본다?
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();
  const set = new Set();

  for (const num of arr) map.set(num, (map.get(num) || 0) + 1);

  for (const [, value] of map) {
    if (set.has(value)) return false;
    set.add(value);
  }

  return true;
};
