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

 각 level에 있는 모든 노드의 합 중 가장 큰 합을 갖고있는 level을 리턴해라
 */
var maxLevelSum = function (root) {
  if (root.length === 1) return root.val;
  let max = root.val;
  const queue = [root];
  const level = [];

  while (queue.length > 0) {
    const len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      sum += node.val;

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    level.push(sum);
    max = Math.max(max, sum);
  }
  return level.indexOf(max) + 1;
};
