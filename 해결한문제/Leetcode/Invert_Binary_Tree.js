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
 * @return {TreeNode}
 *
 * 모든 노드의 좌우를 바꿔야한다.
 *
 * DFS
 */
var invertTree = function (root) {
  function DFS(root) {
    if (root === null) return;
    else {
      DFS(root.left);
      DFS(root.right);

      const tmp = root.left;
      root.left = root.right;
      root.right = tmp;
    }
  }
  DFS(root);

  return root;
};
