/**
 * 완전탐색
 */
function solution(number) {
  let answer = 0;
  const len = number.length;
  const stack = [];
  // 0부터 시작해서 0을 넣었을 때 안넣었을 때
  // 3명을 뽑았을 때 합이 0인지 확인해봐라
  function DFS(index) {
    if (stack.length === 3) {
      if (stack[0] + stack[1] + stack[2] === 0) {
        console.log(stack);
        answer += 1;
      }
    } else {
      for (let i = index; i < len; i++) {
        stack.push(number[i]);
        DFS(i + 1);
        stack.pop(number[i]);
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
