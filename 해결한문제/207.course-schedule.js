/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 *
 * numCourses로 총 들을 수 있는 코스의 수가 주어지는데
 * 이때 주어진 numCourse만큼 모든 코스를 수강할 수 있으면 true
 * 아니면 false를 리턴하는 문제이다.
 *
 * 1. 순환구조가 되어서는 안된다.
 * 0을 들으려면 1이 필요하고 1을 들으려면 0이 필요한 구조
 *
 * 2. numCourses만큼 코스를 다 돌아야한다.
 * Graph
 */
var canFinish = function (numCourses, prerequisites) {
  //선행 과목이 앖는 노드는 무조건 들을 수 있으니 그래프에서 포함되지 않는다.
  //순환구조가 만들어지면 안된다, 한가지 과목을 들으려면 여러개의 선행과목이 필요할 수 있다.
  const graph = new Map();
  const visited = [];
  const temp = [];

  //그래프 만들기 v에 대해 e값
  for (let [v, e] of prerequisites) {
    graph.set(v, [...(graph.get(v) || []), e]);
  }

  const DFS = (v) => {
    const edges = graph.get(v);
    if (!edges) return false;
    else {
      for (const edge of edges) {
        if (visited.includes(edge)) continue;
        if (edge === v || temp.includes(edge)) return true;
        temp.push(edge);
        if (DFS(edge)) return true;
        temp.pop(edge);
        visited.push(edge);
      }
    }
  };

  for (const [v, e] of graph) {
    if (DFS(v)) {
      return false; //if cyclic it will not finish so it is false
    }
  }

  return true;
};
// @lc code=end
