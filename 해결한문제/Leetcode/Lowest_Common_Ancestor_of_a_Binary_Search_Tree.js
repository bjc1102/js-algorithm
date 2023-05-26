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
 *
 * 가장 가까운 공통의 조상 노드 찾기
 */
var lowestCommonAncestor = function (root, p, q) {
  const check = [];
  const compare = [];

  function DFS(node) {
    if (node === null) return;
    else {
      // node가 들어가야한다
      check.push(node);
      //p, q도 노드였다
      if (node.val === p.val || node.val === q.val) compare.push([...check]);
      DFS(node.left);
      DFS(node.right);
      //다음 노드로 가기 위해 현재 노드를 꺼내야한다.
      check.pop();
    }
  }

  DFS(root);

  //깨내면 node가 나오니 주의
  const [x, y] = compare;

  for (let i = x.length - 1; i >= 0; i--) {
    const index = y.indexOf(x[i]);
    if (index !== -1) return x[i];
  }
};
