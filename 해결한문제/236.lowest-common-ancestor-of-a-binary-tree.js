/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 *
 * 이전에 풀었던 문제랑 비슷한데 공통의 조상노드를 찾는 문제이다
 */
// var lowestCommonAncestor = function (root, p, q) {
//   const qArr = [];
//   const pArr = [];
//   const stack = [];

//   const dfs = (node) => {
//     if (node === null || (qArr.length > 0 && pArr.length > 0)) return;
//     if (node === p) pArr.push(...stack, node);
//     if (node === q) qArr.push(...stack, node);
//     stack.push(node);
//     dfs(node.left);
//     dfs(node.right);
//     stack.pop();
//   };

//   dfs(root);

//   let prev = root;
//   while (qArr.length && pArr.length) {
//     const qnode = qArr.shift();
//     const pnode = pArr.shift();

//     if (qnode !== pnode) return prev;
//     prev = qnode;
//   }

//   return prev;
// };
// @lc code=end

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  console.log(root);
  if (root) {
    if (root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left || right;
  }
  return null;
};
