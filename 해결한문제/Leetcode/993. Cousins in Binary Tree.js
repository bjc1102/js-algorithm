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
 * @param {number} x
 * @param {number} y
 * @return {boolean}

 사촌 찾기 => 서로 다른 부모와 같은 depth를 가진다면 사촌임
 dfs로 탐색해야할지 bfs로 해야할지

 깊이와 부모의 정보를 가져야함
 */
var isCousins = function(root, x, y) {

    let depthX = 0;
    let depthY = 0;
    let parentX = 0;
    let parentY = 0;

    const dfs = (node, parent, depth) => {
        if(node === null) return
        if(node.val === x) {
            depthX = depth
            parentX = parent
        } else if(node.val === y) {
            depthY = depth
            parentY = parent
        } 

        dfs(node.left, node, depth + 1)
        dfs(node.right, node, depth + 1)
        
    }

    dfs(root, root, 0)

    return depthX === depthY && parentX !== parentY;
};
