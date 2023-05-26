/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 *
 * 레벨 단위로 쪼개서 배열로 관리하기 BFS를 쓴다.
 *
 * 이진트리이며 left, right로 나누어놓았다
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [];
  const answer = [];

  queue.push(root);
  answer.push([root.val]);

  while (queue.length !== 0) {
    const len = queue.length;
    const level = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      //왼쪽과 오른쪽
      if (node.left !== null) {
        queue.push(node.left);
        level.push(node.left.val);
      }
      if (node.right !== null) {
        queue.push(node.right);
        level.push(node.right.val);
      }
    }
    if (level.length !== 0) answer.push(level);
  }

  return answer;
};
