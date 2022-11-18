var floodFill = function (image, sr, sc, color) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const m = image.length;
  const n = image[0].length;
  const target = image[sr][sc];

  if (target === color) return image;

  function DFS(cx, cy) {
    for (let i = 0; i < dx.length; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && image[nx][ny] === target) {
        image[nx][ny] = color;
        DFS(nx, ny);
      }
    }
  }

  image[sr][sc] = color;
  DFS(sr, sc);

  return image;
};

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 0],
    ],
    0,
    0,
    2
  )
);
