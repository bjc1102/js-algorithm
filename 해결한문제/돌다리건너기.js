function solution(n) {
  /**
   * 돌다리를 건너려면 한칸을 더 가야 한다
   */
  let answer = 0;
  const stone = n + 1;
  const dy = Array.from({ length: stone + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= stone; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  answer = dy[stone];
  return answer;
}

console.log(solution(7));
