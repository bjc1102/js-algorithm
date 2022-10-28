/**
 *  철수는 한번에 1~2 계단을 오를 수 있다.
 *  N 계단이 주어질 떄 N계단까지 오를 수 있는 방법의 갯수는?
 *
 * DFS로 풀기
 * 동적 계획법으로 풀기
 *
 * 동적계획법이란 아주 작은 단위의 문제로 해결하기 -> 직관적으로 쪼개야 한다.
 * 답을 기록해놓고 문제를 조금씩 넓힌다
 * 점화식의 관계가 있다.. -> 점화식을 파악하는게 중요함
 * 이미 구한 답을 적절히 활용하니 다음 답이 나왔다.
 *
 * 계단 한개를 갈때...
 * 계단 두개를 갈때...
 * 계단 세게를 갈때...
 *
 * 다이나믹 테이블 dy에 넣고 구한다.
 *
 * 직관적으로 볼 수 있는 부분은 dy에 넣는다
 *
 * 다이나믹은 원리가 중요하다
 */
function solution(n) {
  let answer = 0;
  function DFS(level) {
    if (level <= 0) {
      if (level === 0) answer += 1;
    } else {
      for (let i = 1; i <= 2; i++) {
        DFS(level - i);
      }
    }
  }
  DFS(n);
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= 45; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[n];

  return answer;
}

console.log(solution(45));
