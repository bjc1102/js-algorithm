/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopy = function(original, cloned, target) {
    const dfs = (o, c) => {
        if (o === null) return null;
        if (o === target) return c;

        let left = dfs(o.left, c.left);
        if (left) return left;
        return dfs(o.right, c.right);
    }
    
    // 깊이 우선 탐색 실행
    return dfs(original, cloned);
};
