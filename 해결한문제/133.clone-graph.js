/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 *
 * 함수 노드가 주어지는데 이 노드의 간선 정보를 출력해라
 * node.val은 유니크한 숫자이다
 */
var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();
  map.set(node, new Node(node.val));
  const queue = [node];

  while (queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const nNode = queue.shift();

      for (const nextNode of nNode.neighbors) {
        if (!map.has(nextNode)) {
          //이미 탐색한 노드는 다시 방문이 필요없다
          map.set(nextNode, new Node(nextNode.val));
          queue.push(nextNode);
        }
        //클론을 만들어야하니 nextNode의 정보도 넣는다
        map.get(nNode).neighbors.push(map.get(nextNode));
      }
    }
  }
  return map.get(node);
};
// @lc code=end
