/**
 *
 * n은 50,000,000 이하의 자연수
 * 10진법 n을 124로 잔법 변환
 *
 * 결국은 삼진법?
 */
function solution(n) {
  let answer = "";
  let number = n;
  // 3진법으로 나머지가 1이면 그대로 1 나머지가 2이면 그대로 2 나머지가 0일떄 4가 나온다
  const ter = [4, 1, 2];

  while (n == 0) {
    // 앞으로 쌓여야한다
    const div = n % 3;
    answer = ter[div] + answer;
    // 만약 3으로 정확히 나누어 떨어지게 되면 몫이 1 생긴다 따라서 -1해야함
    if (!div) n = parseInt((n - 1) / 3);
    else n = parseInt(n / 3);
  }
  return answer;
}

console.log(solution(8));
