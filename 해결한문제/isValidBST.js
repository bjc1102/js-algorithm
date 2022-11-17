/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * 이진탐색트리이며 왼쪽노드는 root노드보다 작아야하고 오른쪽노드는 루트보다 커야한다.
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 *
 * 처음 BFS로 구현하였는데 레벨 단위로 최댓값, 최솟값을 레벨 단위로 전달해주는 부분에서 막혀버렸다.
 * 그런데 그냥 재귀로 구현하는 부분이 훨씬 쉽다는 것을 깨달았다
 */
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (root === null) return true;
  //같아도 안된다
  if (root.val <= min || root.val >= max) return false;

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
