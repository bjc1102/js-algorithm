/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * 지름을 구해라
 * 지름은 이진트리 안에서 가장 멀리 떨어진 노드간에 길이이다.
 *
 * 루트를 통과하거나 통과하지않을 수도 있다.
 *
 * 각 루트노드마다 길이를 구해서 최대값으로 활용한다.
 *
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let answer = 0;

  const DFS = (node) => {
    if (node === null) return 0;

    const left = DFS(node.left);
    const right = DFS(node.right);

    answer = Math.max(answer, left + right);

    return 1 + Math.max(answer, left + right);
  };

  DFS(root);

  return answer;
};
