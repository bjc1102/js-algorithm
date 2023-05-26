function solution(n) {
  let answer = 0;
  const dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1;
  dy[2] = 1;
  dy[3] = 2;
  for (let i = 4; i <= n; i++) {
    dy[i] = (dy[i - 1] + dy[i - 2]) % 1234567;
  }

  return dy[n];
}

console.log(solution(99999));
