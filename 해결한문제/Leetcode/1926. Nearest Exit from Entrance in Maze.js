/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 * 상하좌우로 움직일 수 있다.
 * 이때 가장 가까운 출구를 찾아라
 * 벽(+) 빈셀(.)으로 표현된다.
 *
 * x와 y라서 너무 헷갈렸다
 * nx의 범위가 x축 범위인줄 알았는데 실제 구현할 땐 y축 범위로 구현해야했다.
 * 왜냐하면 [][] 2차원 배열에서 x축으로 움직이는 범위는 행렬로만 따지면 [y][x]이다.
 */
var nearestExit = function (maze, entrance) {
  const dirm = [-1, 0, 1, 0];
  const dirn = [0, -1, 0, 1];
  let level = 1;

  const queue = [entrance];
  maze[entrance[0]][entrance[1]] = "-";

  while (queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [pm, pn] = queue.shift();

      for (let j = 0; j < 4; j++) {
        const nm = pm + dirm[j];
        const nn = pn + dirn[j];

        if (
          nm >= 0 &&
          nm < maze.length &&
          nn >= 0 &&
          nn < maze[0].length &&
          maze[nm][nn] === "."
        ) {
          if (
            nm === 0 ||
            nn === 0 ||
            nm === maze.length - 1 ||
            nn === maze[0].length - 1
          )
            return level;
          maze[nm][nn] = "-";
          queue.push([nm, nn]);
        }
      }
    }
    level++;
  }

  return -1;
};
