function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const dlen = dx.length;

  function DFS(x, y) {
    for (let i = 0; i < dlen; i++) {
      const px = x + dx[i];
      const py = y + dy[i];
      // 하나라도 만족하지 않으면
      if (px >= 0 && px < n && py >= 0 && py < n && board[px][py] === 1) {
        board[px][py] = 0;
        DFS(px, py);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        DFS(i, j);
        answer += 1;
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
