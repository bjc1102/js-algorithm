function solution(n, arr) {
  /*
    인접행렬과 인접리스트의 차이

    정점 갯수가 엄청 많아지면 1~n까지 배열 돌리기가 어렵다
    따라서 인접행렬은 시간복잡도, 메모리 효율상 매우 비효율적

    인접리스트는 대응되는 만큼의 크기로 0을 채우는게 아니라
    n노드에서 갈 수 있는 노드를 저장한다

    가능한 인접리스트를 쓰는게 좋다
    훨씬 효율적임
   */
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => []);
  const check = Array.from({ length: n + 1 }, () => 0);

  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  const tmp = [1];

  function DFS(v) {
    if (v === n) {
      answer += 1;
      console.log(tmp);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        // 그래프 값을 check에 넣어야함
        const value = graph[v][i];
        if (check[value] === 0) {
          check[value] = 1;
          tmp.push(value);
          DFS(value);
          tmp.pop();
          check[value] = 0;
        }
      }
    }
  }

  check[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
