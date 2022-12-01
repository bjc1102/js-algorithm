/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const source = image[sr][sc];

  if (source === color) return image;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(px, py) {
    for (let i = 0; i < dx.length; i++) {
      const nx = px + dx[i];
      const ny = py + dy[i];

      if (
        nx >= 0 &&
        nx < image.length &&
        ny >= 0 &&
        ny < image[0].length &&
        image[nx][ny] === source
      ) {
        image[nx][ny] = color;
        DFS(nx, ny);
      }
    }
  }

  image[sr][sc] = color;
  DFS(sr, sc);

  return image;
};
