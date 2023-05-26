/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * BST로 주어진 노드 중에서 공통의 조상을 찾는게 목적이다
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const answer = [];
  const check = [];

  function DFS(node) {
    if (node === null) return;
    else {
      check.push(node);
      if (node.val === p.val || node.val === q.val) answer.push([...check]);
      DFS(node.left);
      DFS(node.right);
      check.pop();
    }
  }

  DFS(root);
  const [x, y] = answer;
  for (let i = y.length - 1; i >= 0; i--) {
    if (x.includes(y[i])) return y[i];
  }
};
