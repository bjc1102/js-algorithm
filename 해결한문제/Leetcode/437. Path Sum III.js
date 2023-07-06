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
 * @param {number} targetSum
 * @return {number}

 연속되는 노드가 targetSum일 때 갯수 구하기
 */
var pathSum = function (root, targetSum) {
  let count = 0;
  const DFS = (node, stack) => {
    if (node === null) return;
    else {
      stack.push(node.val);
      let startIndex = 0;
      let endIndex = 0;
      let currentSum = stack[0];

      while (endIndex < stack.length) {
        if (currentSum === targetSum) {
          console.log(stack);
          count += 1;
          break;
        }
        if (currentSum < targetSum) {
          endIndex++;
          currentSum += stack[endIndex];
        } else {
          currentSum -= stack[startIndex];
          startIndex++;
        }
      }
      DFS(node.left, stack);
      DFS(node.right, stack);
      stack.pop();
    }
  };
  DFS(root, []);

  return count;
};

/*
    첫 번쨰 인덱스부터 시작하게 되면 연속되는 값으로 타겟을 구할 떄, 슬라이딩 윈도우로 구하게 되며 동시에 중복되는 값이 게속해서 발생할 수 있다.
    따라서 역순으로 값을 계산하면 간단하게 구할 수 있다..
*/

var pathSum = function (root, targetSum) {
  let count = 0;

  const DFS = (node, stack) => {
    if (node === null) return;

    stack.push(node.val);
    let currentSum = 0;

    // 현재 노드부터 역순으로 누적 합을 계산하며 targetSum과 비교
    for (let i = stack.length - 1; i >= 0; i--) {
      currentSum += stack[i];
      if (currentSum === targetSum) {
        count += 1;
      }
    }

    DFS(node.left, stack.slice()); // 왼쪽 자식 노드로 DFS 호출 (스택 복사)
    DFS(node.right, stack.slice()); // 오른쪽 자식 노드로 DFS 호출 (스택 복사)

    stack.pop(); // 현재 노드를 경로에서 제거
  };

  DFS(root, []);

  return count;
};
