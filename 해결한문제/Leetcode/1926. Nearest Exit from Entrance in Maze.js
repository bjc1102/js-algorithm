/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 * 상하좌우로 움직일 수 있다.
 * 이때 가장 가까운 출구를 찾아라
 * 벽(+) 빈셀(.)으로 표현된다.
 */
var nearestExit = function (maze, entrance) {
  const x = [-1, 0, 1, 0];
  const y = [0, -1, 0, 1];
  let level = 1;

  const queue = [entrance];
  maze[entrance[0]][entrance[1]] = "-";

  while (queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [pointX, pointY] = queue.shift();

      for (let j = 0; j < x.length; j++) {
        const nx = pointX + x[j];
        const ny = pointY + y[j];

        if (
          nx >= 0 &&
          nx < maze.length &&
          ny >= 0 &&
          ny < maze[0].length &&
          maze[nx][ny] === "."
        ) {
          if (
            nx === 0 ||
            ny === 0 ||
            nx === maze.length - 1 ||
            ny === maze[0].length - 1
          )
            return level;
          maze[nx][ny] = "-";
          queue.push([nx, ny]);
        }
      }
    }
    level++;
  }

  return -1;
};
