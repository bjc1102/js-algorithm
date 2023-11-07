/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}

 p, q가 동일한지 확인
 -> null 비교하는 순서가 잘못되어 수정함
 */
var isSameTree = function(p, q) {
    const dfs = (pNode, qNode) => {
        // 값이 같은 경우는 확인하지 않고 진행함
        // 둘 다 null이면 같은 것으로 간주 (둘 다 리프 노드)
        if (!pNode && !qNode) return true;
        // 한쪽만 null이면 다른 것으로 간주함
        if (!pNode || !qNode) return false;
        // 값이 다르면 다른 것으로 간주함
        if (pNode.val !== qNode.val) return false;
        return dfs(pNode.left, qNode.left) && dfs(pNode.right, qNode.right);
    };

    return dfs(p, q);
};
