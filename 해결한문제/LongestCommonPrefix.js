/**
 * @param {string[]} strs
 * @return {string}
 *
 * 단어의 맨 앞이 일치하는지 확인하는 문제
 *
 * 문자는 한개이상 들어오고 단어는 0개가 나올 수도 있다.
 *
 * 일단 생각나는건 배열 전체 순회
 */
var longestCommonPrefix = function (strs) {
  let answer = "";
  const len = strs.length;
  const min = Math.min(...strs.map((v) => v.length));
  if (min < 1) return answer;

  for (let i = 0; i < min; i++) {
    const check = new Map();
    for (let j = 0; j < len; j++) {
      // j는 문자열을 순회
      const char = strs[j][i];
      if (check.get(char)) check.set(char, check.get(char) + 1);
      else check.set(char, 1);
    }
    if (check.size > 1) return answer;
    else {
      answer += [...check.keys()].join("");
    }
  }
  return answer;
};

console.log(longestCommonPrefix(["a"]));
