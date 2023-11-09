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
 * @return {boolean}

 0은 false, 1은 true 무조건 리프노드만 해당 값을 가진다
 2는 or, 3은 and
 부울값을 잘 조합해서 최종적으로 어떤 boolean 값을 리턴해야하는지
 */
var evaluateTree = function(root) {
    const dfs = (node) => {
        if(node.val === 0) return false;
        if(node.val === 1) return true;

        if(node.val === 2) return dfs(node.left) || dfs(node.right)
        if(node.val === 3) return dfs(node.left) && dfs(node.right)
    }

    return dfs(root)
};
