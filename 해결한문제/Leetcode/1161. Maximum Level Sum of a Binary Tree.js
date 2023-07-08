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
  if (!root) return 0;

  let maxSum = root.val;
  const queue = [root];
  let level = 1;
  let maxLevel = 1;

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelSum > maxSum) {
      maxSum = levelSum;
      maxLevel = level;
    }

    level++;
  }

  return maxLevel;
};
