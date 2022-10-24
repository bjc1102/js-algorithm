function solution(board) {
  /*
    상하좌우로만 이동한다
    출발점은 1,1 / 도착점은 7,7 좌표임

    1은 벽이다

    탈출할 수 있는 경로의 갯수를 찾아라

    이전경로로만 안돌아가면 된다
    왔던 길을 1로 만들어주기

    px, py가 격자판 -로 들어가는 것만 생각했다
    두가지가 0보다 커져서 보드판 밖으로 나가는 경우 체크를 빼먹었디..
    */
  let answer = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const len = dx.length;
  const boardlen = board.length;

  function DFS(x, y) {
    // x, y는 좌표
    if (x === 6 && y === 6) {
      answer += 1;
    } else {
      for (let i = 0; i < len; i++) {
        const px = x + dx[i];
        const py = y + dy[i];

        if (
          px >= 0 &&
          px < boardlen &&
          py >= 0 &&
          py < boardlen &&
          board[px][py] === 0
        ) {
          board[px][py] = 1;
          DFS(px, py);
          board[px][py] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
