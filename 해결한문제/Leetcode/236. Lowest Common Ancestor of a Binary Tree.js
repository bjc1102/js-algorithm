/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}

 두 노드와 가장 가까운 조상 노드를 구해라
 */
var lowestCommonAncestor = function (root, p, q) {
  let answer = [];

  const DFS = (node, target, arr) => {
    if (node === null) return;
    if (node === target) answer.push([node, ...arr]);
    else {
      arr.unshift(node);
      DFS(node.left, target, arr);
      DFS(node.right, target, arr);
      arr.shift();
    }
  };

  DFS(root, p, []);
  DFS(root, q, []);

  while (answer[0].length && answer[1].length) {
    if (answer[0][0] === answer[1][0]) return answer[0][0];
    if (answer[0].length > answer[1].length) answer[0].shift();
    else answer[1].shift();
  }
};

/*
    내가 풀었던 풀이와 유사했는데 더 효율적이라 정리했다
    DFS로 계속해서 탐색해나간다

    나는 루트가 겹쳐있을 때 하나를 다시 찾기위해 중복되는 부분이 있었는데 아래 코드에서는 굳이 찾지 않더라도 한 쪽값이 null이면 해당 노드를 루트로 처리해버린다
*/

var lowestCommonAncestor = function (root, p, q) {
  // 깊이 우선 탐색을 위한 도우미 함수 정의
  const dfs = (node) => {
    // 기본적인 경우: 노드가 null인 경우 null을 반환
    if (node === null) {
      return null;
    }

    // 현재 노드가 p 또는 q와 일치하는 경우 노드를 반환
    if (node === p || node === q) {
      return node;
    }

    // 왼쪽과 오른쪽 서브트리를 재귀적으로 탐색
    const left = dfs(node.left);
    const right = dfs(node.right);

    // 왼쪽과 오른쪽 서브트리 모두 null이 아닌 값을 반환하면,
    // p와 q가 서로 다른 서브트리에 위치하므로 현재 노드가 가장 가까운 공통 조상이 됨
    if (left && right) {
      return node;
    }

    // 왼쪽 또는 오른쪽 서브트리 중 하나만 null이 아닌 값을 반환하면,
    // p와 q가 동일한 서브트리에 위치하므로 해당 값을 반환
    return left || right;
  };

  // 루트에서부터 깊이 우선 탐색 시작
  return dfs(root);
};
