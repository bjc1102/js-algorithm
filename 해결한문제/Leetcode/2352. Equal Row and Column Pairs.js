/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  const colArr = [];
  const rowMap = new Map();
  let count = 0;

  // 각 행의 값을 문자열로 변환하여 colArr에 저장
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(grid[i][j]);
    }
    const key = arr.join(",");
    colArr.push(key);
  }

  // 각 열의 값을 문자열로 변환하여 rowMap에 저장하고 개수를 세기
  // 비교되어야하는 값이므로 Hash로 구현
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(grid[j][i]);
    }
    const key = arr.join(",");
    rowMap.set(key, rowMap.get(key) + 1 || 1);
  }

  // colArr에서 각 문자열과 일치하는 rowMap의 개수를 더해 count 계산
  for (const key of colArr) {
    if (rowMap.has(key)) {
      count += rowMap.get(key);
    }
  }

  return count;
};

/*
   생각한대로 깔끔하게 풀어낸 것은 아래 코드
   처음에 행과 열끼리 비교하는 것을 모르고 행끼리도 비교했다가 수정했다.

   내껀 2n^2 아래 코드는 n^2이다
*/

var equalPairs = function (grid) {
  const columns = new Map();
  const rows = new Map();
  let rowNums, colNums, rowHash, colHash;
  // 서로 다른 행과 열에 속하는 숫자 쌍의 개수
  let ans = 0;

  // 주어진 그리드의 각 행을 반복
  for (let i = 0; i < grid.length; i++) {
    rowNums = [];
    colNums = [];

    // 현재 행의 각 열을 반복
    for (let j = 0; j < grid[i].length; j++) {
      rowNums.push(grid[i][j]);
      colNums.push(grid[j][i]);
    }

    rowHash = rowNums.join(",");
    colHash = colNums.join(",");

    rows.set(rowHash, (rows.get(rowHash) || 0) + 1);
    columns.set(colHash, (columns.get(colHash) || 0) + 1);
  }

  // rows 맵을 순회하면서 각 행의 해시 값이 columns 맵에 존재하는지 확인
  for (const [row, value] of rows) {
    if (columns.has(row)) {
      // 서로 다른 행과 열에 속하는 숫자 쌍의 개수를 계산하여 ans에 더함
      ans += value * columns.get(row);
    }
  }

  return ans;
};
