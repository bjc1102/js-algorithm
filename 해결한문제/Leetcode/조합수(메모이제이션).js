function solution(n, r) {
  let answer;

  // nCr = n-1Cr-1 + n-1Cr
  // 이렇게 공식을 나눌 수 있는 이유는 n의 숫자만큼 r개를 뽑을 때
  // n은 포함되는 경우와 포함되지 않는 경우의 합으로 구해진다

  // FIXME: 공식을 보고 수형도만 제대로 그릴 수 있다면 크게 어려운 문제는 아닌데 비효율적

  // 따라서 메모이제이션을 사용하는데 이미 갔던 길에 답을 저장해놓고 재귀로 들어가지 않고도
  // 이미 구해놓은 값을 가져오는 방식이다
  const dy = Array.from(Array(35), () => Array(35).fill(0));
  // 딱 맞추지 말고 그냥 크게 만들어라

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);

  return answer;
}

console.log(solution(33, 19));
