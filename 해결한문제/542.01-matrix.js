/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 *
 * 가장 가까이 있는 0을 찾는 문제이다.
 *
 * 이때 0은 대각선이 아닌 가로 세로의 거리로만 판단한다.
 *
 * 0을 중심으로 이동한다.
 */
// var updateMatrix = function (mat) {
//   const m = mat.length;
//   const n = mat[0].length;
//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (mat[i][j] === 0) continue;
//       const queue = [[i, j]];
//       let level = 1;

//       //BFS
//       //이미 탐색한 곳에서 값을 찾아낸다.
//       while (queue.length > 0) {
//         const len = queue.length;
//         for (let k = 0; k < len; k++) {
//           const [cx, cy] = queue.shift();
//           let flag = false;
//           for (let l = 0; l < dy.length; l++) {
//             const nx = cx + dx[l];
//             const ny = cy + dy[l];
//             if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
//               if (mat[nx][ny] === 0) {
//                 flag = true;
//                 break;
//               } else queue.push([nx, ny]);
//             }
//           }
//           if (flag) break;
//           level += 1;
//         }
//       }

//       mat[i][j] = level;
//     }
//   }
//   return mat;
// };

/**
 * @param {number[][]} mat
 * @return {number[][]}
 *
 * 0으로 BFS를 돌린다.
 */
var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //거리를 계산하기 위해 레벨도 넣는다
      if (mat[i][j] === 0) queue.push([i, j, 0]);
      else mat[i][j] = Infinity;
    }
  }

  while (queue.length > 0) {
    const curr = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = curr[0] + dx[i];
      const ny = curr[1] + dy[i];
      const level = curr[2];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && mat[nx][ny] === Infinity) {
        mat[nx][ny] = level + 1;
        queue.push([nx, ny, level + 1]);
      }
    }
  }

  return mat;
};
// @lc code=end
