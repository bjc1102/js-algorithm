/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leaf1 = getLeafValues(root1);
  const leaf2 = getLeafValues(root2);

  return areArraysEqual(leaf1, leaf2);
};

function getLeafValues(node) {
  if (node === null) {
    return [];
  }

  if (node.left === null && node.right === null) {
    return [node.val];
  }

  const leftLeaves = getLeafValues(node.left);
  const rightLeaves = getLeafValues(node.right);

  //처음엔 문자열로 비교헀는데 71/4와 7/14를 구분할 수 없었다
  /*
    이후 ,를 넣어 구분했더니 node === null 조건에서 무엇을 리턴하든 문자열 처리가 되어 한쪽 노드만 있을 때 
    잘못된 값이 들어가는 오류가 계속해서 발생했다.
    따라서 배열로 수정하여 비교했다
    */
  return [...leftLeaves, ...rightLeaves];
}

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
