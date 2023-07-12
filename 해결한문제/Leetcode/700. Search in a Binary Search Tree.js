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
 * @param {number} val
 * @return {TreeNode}

주어진 값을 가진 노드를 찾고 해당 노드를 반환해라.
노드가 존재하지 않는다면 Null을 리턴
 */
var searchBST = function (root, val) {
  const dfs = (node) => {
    if (node === null) return null;
    if (node.val === val) return node;

    // 현재 노드가 더 크다면 왼쪽, 작다면 오른쪽
    if (node.val > val) return dfs(node.left);
    else return dfs(node.right);
  };

  return dfs(root);
};
