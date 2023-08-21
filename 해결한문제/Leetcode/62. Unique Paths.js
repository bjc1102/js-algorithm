/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 m = 행
 n = 열

 왼쪽 위부터 출발하여 Finish에 도달할 수 있는 모든 경우의 수를 리턴해라
 아래, 오른쪽으로만 움직이기 때문에 특정 좌표에서 아래로 오는 경우의 수와 오른쪽으로 오는 경우의 수를 합산하면 된다.
 */
var uniquePaths = function(m, n) {
    const dy = Array.from({length: m}, () => Array.from({length: n}, () => 1))

    for (let i = 1; i < m; i++) { 
        for (let j = 1; j < n; j++) {
            // 왼쪽으로 오는 경우 + 위족에서 오는 경우
            dy[i][j] = dy[i-1][j] + dy[i][j-1];
        }
    }
    return dy[m - 1][n - 1]
};
