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

 하나의 노드가 자신의 모든 부모보다 크다면 해당 노드는 좋은 노드이다 
 */
var goodNodes = function (root) {
  let maxArr = [];
  let count = 0;

  const DFS = (node) => {
    if (node === null) return;
    maxArr.push(node.val);
    if (Math.max(...maxArr) <= node.val) count += 1;
    DFS(node.left);
    DFS(node.right);
    maxArr.pop();
  };

  DFS(root);

  return count;
};

/*
왼쪽 노드를 타고 들어갔을 떄 최댓값이 변경되면 다시 나와 오른쪽으로 들어갈 떄 왼쪽 노드에서 설정된 최댓값 때문에 문제가 생길줄 알고 배열로 구현했다.

그런데 굳이 배열을 사용하지 않고 파라미터로 받아서 넣는다면 재귀적으로 실행됐을 때의 값으로 해결할 수 있다. 
*/

var goodNodes = function (root) {
  let count = 0;

  const DFS = (node, max) => {
    if (node === null) return;

    if (node.val >= max) {
      count += 1;
      max = node.val;
    }

    DFS(node.left, max);
    DFS(node.right, max);
  };

  DFS(root, Number.MIN_SAFE_INTEGER);

  return count;
};
