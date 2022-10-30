/**
 * DFS인가? => n은 60,000이하의 자연수라 불가능
 * DP로 풀 수 있다.
 * 타일이 1일때는 한가지, 2라면 2가지, 3이라면 1의 가짓수와 2의 가짓수가 오게된다.
 */
function solution(n) {
  const dy = Array(n + 1).fill(0);
  //   const dy = Array.from({ length: n + 1 }, () => 0);

  // 길이 1짜리 타일은 세로로 세워서 하나밖에 못옴
  dy[1] = 1;
  // 길이 2짜리 타일은 세로로 2개 잇기, 눕혀서 2개 쌓기로 2가지 방법임
  dy[2] = 2;

  // 조건 때문에 또 삽질
  for (let i = 3; i <= n; i++) {
    const x = dy[i - 2] + dy[i - 1];
    dy[i] = x % 1000000007;
  }

  return dy[n];
}

console.log(solution(4));
