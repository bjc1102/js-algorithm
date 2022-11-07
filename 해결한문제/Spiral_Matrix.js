/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * 2차원 배열 나선형 탐색하기
 * 0,0에서 시작
 * 1) 오른쪽 끝으로 간다
 * 2) 오른쪽 맨 아래로 간다
 * 3) 왼쪽 맨 아래로 간다
 * 4) 다시 맨위로
 * 5) 반복 끝날떄까지
 *
 *
 * => 생각해보니 모서리를 제외하고는 중복이 생기지 않는다
 */
const spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const answer = [];
  if (m === 0) return [];

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // 첫 번째 직진
    for (let i = colBegin; i <= colEnd; i++) answer.push(matrix[rowBegin][i]);
    rowBegin += 1;
    //두 번째 직진
    for (let i = rowBegin; i <= rowEnd; i++) answer.push(matrix[i][colEnd]);
    colEnd -= 1;
    // 세 번째 직진
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) answer.push(matrix[rowEnd][i]);
    }
    rowEnd -= 1;
    // 네 번째 직진
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) answer.push(matrix[i][colBegin]);
    }
    colBegin += 1;
  }

  return answer;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
