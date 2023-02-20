/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *
 * 중위순회 결과를 출력해라
 * 왼 -> 루 -> 오
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const answer = [];

  function dfs(node) {
    if (node === null) return;
    dfs(node.left);
    // answer.push위치만 잘 조정하면 pre in post이다
    answer.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  return answer;
};
// @lc code=end
