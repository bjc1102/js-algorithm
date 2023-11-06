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
 * @param {TreeNode} subRoot
 * @return {boolean}

 서브트리가 있는지 찾기, 있다면 true 없다면 false
 */
var isSubtree = function(root, subRoot) {

    const isSameTree = (node, sub) => {
        // 모두 같은지를 확인해봐야 하기 때문에 false case를 잘 확인해야 했다
        // 만약 값이 다르거나 한쪽만 null이라면 false를 리턴 
        // 둘다 null일때 true를 리턴
        
        if (!node && !sub) return true; // 두 노드 모두 null인 경우
        if (!node || !sub) return false; // 한 노드만 null인 경우
        if (node.val !== sub.val) return false; // 노드 값이 다른 경우

        return isSameTree(node.left, sub.left) && isSameTree(node.right, sub.right)
    }


    const dfs = (node) => {
        if(isSameTree(node, subRoot)) return true;
        if(node === null) return false;

        return dfs(node.left) || dfs(node.right)
    }

    return dfs(root)
};
