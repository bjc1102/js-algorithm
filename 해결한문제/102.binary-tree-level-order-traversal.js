/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @param {TreeNode} root
 * @return {number[][]}
 *
 * 같은 레벨끼리 묶어서 배열로 리턴
 */
var levelOrder = function (root) {
  const answer = [];
  const queue = [];
  if (root === null) return answer;
  queue.push(root);

  while (queue.length > 0) {
    const temp = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      temp.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    answer.push(temp);
  }

  return answer;
};
// @lc code=end
