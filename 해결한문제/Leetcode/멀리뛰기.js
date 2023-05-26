/**
 * 전형적인 dp로 풀 수 있는 문제이다
 */
function solution(n) {
  let answer = 0;
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = (dy[i - 2] + dy[i - 1]) % 1234567;
  }

  return dy[n];
}
