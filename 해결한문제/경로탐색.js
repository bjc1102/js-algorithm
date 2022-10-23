function solution(n, arr) {
  let answer = 0;
  const check = Array.from({ length: n + 1 }, () => 0);
  const graph = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, (v) => 0)
  );

  arr.forEach((v) => {
    const [a, b] = v;
    graph[a][b] = 1;
  });

  function DFS(num) {
    if (num === n) {
      // 단순히 check로만은 확인할 수 없다
      // 왜냐하면 되돌아간 case를 찾지 못해서 push, pop하면서 실제 어떤 배열이
      // 들어가는지 확인해봐야한다
      console.log(check);
      answer += 1;
    } else {
      for (let i = 1; i <= n; i++) {
        // graph가 없거나 이미 왔던 길은 pass
        if (graph[num][i] && !check[i]) {
          check[i] = 1;
          DFS(i);
          check[i] = 0;
        }
      }
    }
  }

  /*
  1은 무조건 방문했던 경로로써 미리 체크했어야했는데 체크를 못해서 답이 안나왔다
  
  */
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
