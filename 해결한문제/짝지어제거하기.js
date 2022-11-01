/**
 * 문자열을 다 자를 수 있으면 1
 * 아니면 0
 *
 * 배열이 끝까지 탐색되면
 * 스택으로 푸는거였따...
 */
function solution(s) {
  let answer = 1;
  let str = s + "";
  if (s.length % 2 === 1) return 0;
  while (str.length) {
    const stack = [];
    const len = str.length;
    stack.push(str[0]);
    for (let i = 1; i < len; i++) {
      if (stack[stack.length - 1] === str[i]) {
        stack.pop();
      } else stack.push(str[i]);
    }
    if (stack.length === len) {
      answer = 0;
      break;
    }
    str = stack.join("");
  }

  return answer;
}

console.log(solution("cdcd"));
