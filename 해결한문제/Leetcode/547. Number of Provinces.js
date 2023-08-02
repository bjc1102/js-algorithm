/**
 * @param {number[][]} isConnected
 * @return {number}

 모든 도시의 갯수를 구해라 -> answer
 연결되어 있다면 하나의 도시로 표현
 dfs로 계속해서 연결되어 있는 도시를 찾는다
 이미 방문한 도시는 건너뛴다 -> 방문한 곳을 저장해야함
 */
const findCircleNum = (isConnected) => {
  const n = isConnected.length;
  const visited = new Set();
  let answer = 0;

  //dfs를 만드는게 어려웠다. 도시 인덱스만 넘겨야할지 전체 배열을 넘겨야할지 헷갈렸는데 도시 위주로 돌리기 때문에 도시 인덱스를 넘겨서 구현했다. 이후 자기 자신으로 재귀해 들어가는 부분을 해결하기 위해 if를 구분하는게 헷갈렸다
  const dfs = (city) => {
    // 현재 방문한 도시는 체크해놓고 다시 방문하지 않는다.
    visited.add(city);
    // 연결된 도시 정보
    const connectedCities = isConnected[city];

    for (let neighbor = 0; neighbor < connectedCities.length; neighbor++) {
      //만약 아직 방문하지 않았지만 연결되어 있는 도시라면 이동
      //이미 방문했다면 패스
      if (connectedCities[neighbor] === 1 && !visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  };

  //전체 도시를 방문해야한다
  for (let city = 0; city < n; city++) {
    // 아직 방문하지 않았다면 -> 다른 것과 연결되어 있지 않다.
    if (!visited.has(city)) {
      dfs(city);
      answer++;
    }
  }

  return answer;
};
