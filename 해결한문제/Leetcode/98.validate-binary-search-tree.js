/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 *
 * BST인지 확인하기
 * 왼쪽노드는 자신의 부모노드보다 작아야하기 때문에 최댓값을 넘긴다
 * 오른쪽노드는 자신의 부모노드보다 커야하기 때문에 최솟값을 넘긴다
 */
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  //최소로 설정된 값보단 커야하고(최소기준) 최대로 설정된 값보단 작아야한다(최대기준)
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
// @lc code=end
