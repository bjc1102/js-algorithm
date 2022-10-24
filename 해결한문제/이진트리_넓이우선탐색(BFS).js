function solution() {
  /*
  전부 들어갈 수 있는 경우를 큐에 넣기

  이런 탐색을 어디에 사용하느냐?
  DFS와 다르게 상태트리로 인식하면 좋다

  레벨 탐색이면서 최단 거리를 탐색하는데 사용한다
    출발 지점에서 도착지점으로 가는데 최단거리가 뭐냐
    이런 최단거리를 구할떄 자주 사용된다
   */
  let answer = "";
  const queue = [];
  queue.push(1);

  while (queue.length) {
    const v = queue.shift();
    answer += `${v} `;

    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) break;
      queue.push(nv);
    }
    // queue.push(v * 2);
    // queue.push(v * 2 + 1);
  }
  return answer;
}

console.log(solution());
