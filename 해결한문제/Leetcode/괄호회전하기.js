/**
 *
 * @param {string} s
 * @returns {Number}
 *
 * 문자열을 < 방향으로 회전한다 s.length만큼 회전하는데
 * 옮길때마다 올바른 괄호 순서를 작성하였는지 확인하고
 * s.length만큼 실행했을 때 온전한 괄호가 완성되는 경우의 수를
 *
 * 1) 큐의 원형큐로 회전 구현
 * 2) 스택으로 옮기고 올바른 골호가 닫히는지 확인
 * 2 - 1) 조건: stack이 빌떄까지 돈다. 스택이나 check배열이 남아있다면 false
 *
 */

function solution(s) {
  let answer = 0;
  const queue = [...s.split("")];
  const len = queue.length;
  if (len % 2 === 1) return 0;
  const sign = new Map();
  sign.set("}", "{");
  sign.set("]", "[");
  sign.set(")", "(");

  for (let i = 0; i < len; i++) {
    //안에서 스택으로 비교
    const stack = [...queue];
    const check = [];

    while (stack.length) {
      const symbol = stack.shift();
      const tmp = sign.get(symbol);
      if (tmp === undefined)
        check.unshift(symbol); // 여는 괄호라서 넣어줘야한다
      else {
        if (tmp !== check[0]) break;
        else check.shift();
      }
    }

    if (stack.length === 0 && check.length === 0) answer += 1;

    const tmp = queue.shift();
    queue.push(tmp);
  }

  return answer;
}

console.log(solution("]"));
