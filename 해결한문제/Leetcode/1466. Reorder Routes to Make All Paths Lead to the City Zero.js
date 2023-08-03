const minReorder = function(n, connections) {
    // 각 노드에 연결된 경로를 저장하는 그래프 만들기
    /*
    Map(6) {
        0 => [ [ 1, 1 ], [ 4, 0 ] ],
        1 => [ [ 0, 0 ], [ 3, 1 ] ],
        3 => [ [ 1, 0 ], [ 2, 0 ] ],
        2 => [ [ 3, 1 ] ],
        4 => [ [ 0, 1 ], [ 5, 1 ] ],
        5 => [ [ 4, 0 ] ]
    }
    */
    const graph = new Map();
    for (const [from, to] of connections) {
        if (!graph.has(from)) graph.set(from, []);
        if (!graph.has(to)) graph.set(to, []);
        graph.get(from).push([to, 1]); // 정방향 연결
        graph.get(to).push([from, 0]); // 역방향 연결
    }

    let answer = 0;
    //한번 방문하면 다시 방문하지 않아도 된다.
    const visited = new Array(n).fill(false);

    // DFS 탐색 함수
    const dfs = (node) => {
        visited[node] = true;
        const connectedNodes = graph.get(node);

        for (const [nextNode, isReversed] of connectedNodes) {
            console.log(nextNode, isReversed)
            if (!visited[nextNode]) {
                // 방향이 바뀌는 경우 +1
                if (isReversed === 1) {
                    answer++;
                }
                console.log("----")
                dfs(nextNode);
            }
        }
    };

    // 도시 0을 시작으로 DFS 탐색 실행
    // 0에서 출발했기 때문에 0과 정방향으로 연결되어 있다면 수정되어야 한다
    dfs(0);

    return answer;
};
