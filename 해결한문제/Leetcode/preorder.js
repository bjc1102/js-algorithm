/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 *
 * children은 안에서 배열로 관리된다.
 *
 * 리턴시 주의할 것
 * 맨 처음에 root가 포함되는지 안되는지 주의할 것
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const answer = [];
  if (root === null) return [];

  function DFS(node) {
    if (node.children.length === 0) return;
    else {
      for (let i = 0; i < node.children.length; i++) {
        answer.push(node.children[i].val);
        DFS(node.children[i]);
      }
    }
  }
  answer.push(root.val);
  DFS(root);

  return answer;
};
