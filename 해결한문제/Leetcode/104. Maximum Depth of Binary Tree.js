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

 최대 깊이를 구해라
 */
var maxDepth = function (root) {
  let maxDep = Number.MIN_SAFE_INTEGER;

  const DFS = (node, depth) => {
    // null은 depth에서 빼준다
    if (node === null) maxDep = Math.max(maxDep, depth - 1);
    else {
      DFS(node.left, depth + 1);
      DFS(node.right, depth + 1);
    }
  };

  DFS(root, 1);

  return maxDep;
};

const maxDepthSolution = function (root) {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};
