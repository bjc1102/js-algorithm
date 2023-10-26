/**
 * @param {number[][]} matrix
 * @return {boolean}
 
 대각선이 모두 동일한지
 */
// var isToeplitzMatrix = function(matrix) {
//     const m = matrix.length
//     const n = matrix[0].length;

//     for(let i = 0; i < n; i++) {
//         let col = 0
//         let row = i
//         const target = matrix[col++][row++]
//         while(col < m && row < n) {
//             if(matrix[col++][row++] !== target) return false;
//         }
//     }

//     for(let i = 0; i < m; i++) {
//         let col = i
//         let row = 0
//         const target = matrix[col++][row++]
//         while(col < m && row < n) {
//             if(matrix[col++][row++] !== target) return false;
//         }
//         console.log("---")
//     }

//     return true  
// };


//굳이 한번에 탐색할 필요가 없었다. 이전것과 비교해서 다른지만 확인하면 됐다
function isToeplitzMatrix(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length - 1; j++) {
            if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false;
            }
        }
    }
    return true;
}
