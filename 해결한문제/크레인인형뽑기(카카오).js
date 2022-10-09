function solution(board, moves) {
  let answer = 0;
  const stack = [];
  const boardLength = board.length; // n * n의 정사각형 격자
  const movesLength = moves.length;

  /*
    moves로 반복문을 돌려 인형을 뽑는다
    0이 아닌 숫자 혹은 길이가 끝날때까지 안으로 들어간다
    해당 자리 숫자를 0으로 바꾼다
    stack의 마지막 자리와 비교를 하고 같으면 꺼내고 아니면 새로온 걸 넣는다
    마지막에 스택의 길이를 리턴
  */

  // 내가 푼 풀이
  // 문제를 잘못 이해했다.. 인형이 서로 만나면 2개가 터지면서 += 1이 아닌 += 2로 동작하게 된다
  // moves.forEach((v, index) => {
  //   const crain = v - 1;
  //   let crain_depth = 0;
  //   while (crain_depth < boardLength) {
  //     // // 맨 아래까지 탐색
  //     const find = board[crain_depth][crain];
  //     if (find !== 0) {
  //       // 마지막 자리와 비교하고 해당 자리를 0으로 만든다
  //       board[crain_depth][crain] = 0; // 찾았다면 0으로 만들기
  //       if (find === stack[stack.length - 1]) {
  //         // 마지막것과 이번에 들어오는 것이 같다면
  //         stack.pop();
  //         answer += 2;
  //       } else stack.push(find);
  //       break;
  //     }
  //     crain_depth += 1;
  //   }
  // });

  moves.forEach((pos) => {
    for (let i = 0; i < board.lengh; i++) {
      if (board[i][pos - 1] !== 0) {
        // 인형 만남
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (stack[stack.length - 1] === tmp) {
          answer += 2;
          stack.pop();
        } else stack.push(tmp);
        break; // 하나만 꺼내야하기 때문에 break가 필수이다
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
