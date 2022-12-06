/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let answer = 0;

  const DFS = (node, L) => {
    if (node === null) answer = Math.max(answer, L - 1);
    else {
      DFS(node.left, L + 1);
      DFS(node.right, L + 1);
    }
  };

  DFS(root, 1);

  return answer;
};
