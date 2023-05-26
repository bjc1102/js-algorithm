function solution(m, coin) {
  // 범위가 커지면 커질수록 DFS로는 풀 수가 없다
  // 다이나믹으로 풀기 위해 dy를 만들어주는데
  // 여기서 dy[i]는 i 금액을 거슬러 주기위해 사용되는 최소 동전 갯수이다
  // 값은 dy[15]값을 주면 된다
  // 이중 포문으로 도는데
  // i = 1일때 1원일때 1부터 dy 최소값으로 초기화
  // i = 2일때 2원일때 2부터 dy 최솟값으로 초기화
  // i = 5일때 5원일때 5부터 dy 최솟값으로 초기화
  let answer = Number.MAX_SAFE_INTEGER;
  const dy = Array.from({ length: m + 1 }, () => 10000);
  dy[0] = 0;

  for (let i = 0; i < coin.length; i++) {
    for (let k = coin[i]; k < dy.length; k++) {
      // 마지막에 코인하나를 무조건 더해주니 해당 코인 값만큼 뺴고
      // 뺀값의 인덱스로 가서 그곳의 코인최솟값에 1을 더헤준다
      // 이후 이미 있던 값과 새로 들어오는 값을 비교해서 넣는다
      dy[k] = Math.min(dy[k], dy[k - coin[i]] + 1);
    }
  }

  answer = dy[m];
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
