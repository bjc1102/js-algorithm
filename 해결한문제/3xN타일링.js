/**
 * 3 * N짜리의 타일
 * n이 홀수인 경우엔 전부 채울 수 없다
 * 2 3
 * 4 11
 * 6, 41
 * 8, 153
 * 10, 571
 * 12, 2131
 * 14, 7953
 *
 * (n - 2) * 4 - (n - 4)
 */
function solution(n) {
  let answer = 0;
  //   const dy = Array.from({ length: n + 1 }, () => 0);
  const dy = Array(n + 1).fill(0);

  dy[1] = 0;
  dy[2] = 3;
  dy[3] = 0;
  dy[4] = 11;

  for (let i = 5; i <= n; i++) {
    if (i % 2 === 1) continue;
    const x = dy[i - 2] * 4 - dy[i - 4];
    console.log(x > dy[i - 2]);
    dy[i] = x + (1000000007 % 1000000007);
  }

  answer = dy[n];

  return answer;
}

console.log(solution(100));
