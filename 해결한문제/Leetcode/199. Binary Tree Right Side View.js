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
 * @return {number[]}

 오른쪽에서 볼 수 있는 노드를 리턴하기
 */
var rightSideView = function (root) {
  if (!root) return [];
  const queue = [root];
  const answer = [root.val];

  while (queue.length > 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      // null이 아닌 가장 오른쪽에 있는 것을 반환
      const node = queue.shift();

      if (node.left !== undefined && node.left !== null) queue.push(node.left);
      if (node.right !== undefined && node.right !== null)
        queue.push(node.right);
    }
    if (queue.length !== 0) answer.push(queue[queue.length - 1].val);
  }

  return answer;
};
