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
 가장 긴 지그재그 경로를 반환
 */
var longestZigZag = function (root) {
  if (!root.left && !root.right) return 0;
  let maxCount = 0;

  const DFS = (node, direction, curr) => {
    if (node === null) {
      //현재 노드 값 뺴야한다
      maxCount = Math.max(curr - 1, maxCount);
      return;
    }
    if (direction === "l") {
      //지그재그가 초기화되는 경우는 현재 노드를 포함해서 다시 시작해야한다
      DFS(node.left, "l", 1);
      DFS(node.right, "r", curr + 1);
    }
    if (direction === "r") {
      DFS(node.left, "l", curr + 1);
      DFS(node.right, "r", 1);
    }
  };

  DFS(root.left, "l", 1);
  DFS(root.right, "r", 1);

  return maxCount;
};
