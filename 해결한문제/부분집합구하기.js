function solution(n) {
  /*
    실제 부분집합을 구하게 될떄
    1이 부분집합에 포함되는 경우와 안되는 경우로 나누게 된다
    이후 1이 포함되지 않았을 때 2가 포함되는 경우와 그렇지 않은 경우
    또 1이 포함되었을 때 2가 포함되는 경우와 그렇지 않은 경우로 계속 나누다보면
    2 * 2 * 2해서 8가지가 되게 된다

    DFS를 어떻게 종료시키는거지란 부분에서 많이 헷갈려서 구현을 제대로 못했다.
    종료되는 조건은 단순히 재귀 호출을 하지 않으면 종료된다는 것을 제대로 알고넘어가야겠다.

    어디까지 탐색할 것인지만 확실히 설계하면 잘 풀 수 있을거라고 생각한다
    */
  let answer = [];
  const check = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v > n) {
      // 종착점에 와서 1로 들어온 것만 출력
      let string = "";
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) string += `${i} `;
      }
      if (string) answer.push(string.trim());
    } else {
      // 출력 예제에서 순서를 지켜주기 위해 1로 먼저 set해야한다

      // 이진트리로 넘어가서 for문을 돌리지 않았지만 for문을 돌리는게 좋다
      //   check[v] = 1;
      //   DFS(v + 1);
      //   check[v] = 0;
      //   DFS(v + 1);

      for (let i = 1; i >= 0; i--) {
        check[v] = i;
        DFS(v + 1);
      }
    }
  }

  DFS(1);
  console.log(check);

  return answer;
}

console.log(solution(3));
