/**
 * 하나는 오름차순, 하나는 내림차순해서 중앙값으로 만들어 더하는게 가장 최소아닐까?
 */

function solution(A, B) {
  let answer = 0;
  const len = A.length;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < len; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

console.log(solution([1, 4, 2], [1, 5, 4, 4]));
