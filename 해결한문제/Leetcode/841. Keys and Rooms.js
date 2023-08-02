/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const queue = [0]; // 0번 방은 무조건 열려있음
  visited.add(0);

  while (queue.length > 0) {
    const room = queue.shift();
    const keys = rooms[room];

    for (const key of keys) {
      if (!visited.has(key)) {
        // 방문하지않았다면 => 방문하기 위해 queue에 넣고 중복방지를 위해 visited에도 넣는다
        queue.push(key);
        visited.add(key);
      }
    }
  }

  return visited.size === rooms.length;
};
