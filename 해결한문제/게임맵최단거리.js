function solution(maps) {
  // 경로 최단거리 출력
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const n = maps.length;
  const m = maps[0].length;

  let count = 1;

  const queue = [[0, 0]];
  maps[0][0] = 0;

  while (queue.length > 0) {
    // 레벨단위 탐색
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) {
            return ++count;
          }
          queue.push([nx, ny]);
          maps[nx][ny] = 0;
        }
      }
    }
    count += 1;
  }
  //   while (queue.length) {
  //     const [x, y] = queue.shift();
  //     for (let j = 0; j < 4; j++) {
  //       const nx = x + dx[j];
  //       const ny = y + dy[j];
  //       if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
  //         if (nx === n - 1 && ny === m - 1) {
  //           answer = maps[x][y] + 1;
  //           break;
  //         }
  //         maps[nx][ny] = maps[x][y] + 1;
  //         queue.push([nx, ny]);
  //       }
  //     }
  //   }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
