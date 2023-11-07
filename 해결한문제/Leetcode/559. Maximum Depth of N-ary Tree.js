/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}

  최대 깊이 구하기
 */
var maxDepth = function(root) {
    if(!root) return 0
    if(!root.children) return 1
    let depth = 0


    const dfs = (node, level) => {
        if(node.children.length === 0) {
            depth = Math.max(depth, level)
            return
        }
        for(const child of node.children) {
            dfs(child, level + 1)
        }
    }

    dfs(root, 1)

    return depth
};
