function solution(n, m) {
  // 1부터 N까지 적힌 번호가 있는데 이떄 M개를 뽑는 방법의 수를 출력
  // 뽑는 방법이니까 조합이다. 기존의 것들은 나열이었음(순열)
  let answer = [];
  const tmp = Array.from({ length: m }, (v) => 0);

  function DFS(L, start) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = start; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1); // start로 넘겨줬는데 어째서 됐던거지
      }
    }
  }

  DFS(0, 1);

  return answer;
}

console.log(solution(4, 2));
