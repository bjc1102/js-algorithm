function solution(board) {
  /*
  섬의 갯수 세기

  대각선으로도 연결되어 있다
  */

  let answer = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const queue = [];
  const len = board.length;
  const plen = dx.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === 1) {
        queue.push([i, j]);
        board[i][j] = 0;
        while (queue.length) {
          const [x, y] = queue.shift();
          console.log(x, y);
          for (let k = 0; k < plen; k++) {
            const px = x + dx[k];
            const py = y + dy[k];
            if (px >= 0 && px < len && py >= 0 && py < len && board[px][py]) {
              board[px][py] = 0;
              queue.push([px, py]);
            }
          }
        }
        answer += 1;
        console.log("DFS END");
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
