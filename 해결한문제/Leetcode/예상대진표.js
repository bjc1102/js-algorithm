// 조건이 2^20
// 몫과 나머지의 합으로 순서 계산하면 되네.. 조건을 잘못걸었다,
function solution(n, a, b) {
  let answer = 0;
  let numa = Math.min(a, b);
  let numb = Math.max(a, b);

  while (numa !== numb) {
    answer += 1;
    numa = parseInt(numa / 2) + (numa % 2);
    numb = parseInt(numb / 2) + (numb % 2);
  }

  return answer;
}

console.log(solution(8, 4, 7));
