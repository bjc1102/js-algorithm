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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const answer = []
    const paths = []
    const dfs = (node) => {
        if(node === null) return
        
        paths.push(node.val)
        // 리프 노드인지 확인
        if (node.left === null && node.right === null) {
            answer.push(paths.join("->"));
        } else {
            dfs(node.left);
            dfs(node.right);
        }
        paths.pop()
    }

    dfs(root)

    return answer
};
