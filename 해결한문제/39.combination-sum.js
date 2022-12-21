/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * target을 만들 수 있는 모든 경우의 수를 구하여라
 * candidate는 반복되어 사용될 수 있지만 만들어진 case는 반복될 수 없다
 * [2,2,3] (O) === [2,3,2] (X)
 *
 * DFS로 풀었는데 시간복잡도가 작살나버렸다.
 * 따라서 DFS + 해쉬로 검증하는 방법은 정답은 아닐거라 생각하고 다른 사람의 풀이를 참조했다.
 * dfs와 유사하지만 백트레킹으로 해결한 문제들이 많았다
 */
// var combinationSum = function (candidates, target) {
//   const answer = [];
//   const search = [];
//   const len = candidates.length;

//   const isDistinct = (exist, newer) => {
//     const map = new Map();
//     for (const num of exist) map.set(num, (map.get(num) | 0) + 1);

//     for (const num of newer) {
//       const val = map.get(num);
//       if (val && val - 1 === 0) map.delete(num);
//       else map.set(num, val - 1);
//     }

//     return map.size !== 0;
//   };

//   const DFS = (sum) => {
//     if (sum > target) return;
//     if (sum === target) {
//       if (answer.length === 0) {
//         answer.push([...search]);
//         return;
//       }
//       for (let i = 0; i < answer.length; i++) {
//         if (!isDistinct(answer[i], search)) return;
//       }
//       answer.push([...search]);
//     } else {
//       for (let i = 0; i < len; i++) {
//         search.push(candidates[i]);
//         DFS(sum + candidates[i]);
//         search.pop(candidates[i]);
//       }
//     }
//   };

//   DFS(0);

//   return answer;
// };

// var combinationSum = function (candidates, target) {
//     const buffer = [];
//     const answer = [];

//     function search(startIdx, target) {
//       if (target === 0) return answer.push(buffer.slice());
//       if (target < 0) return;
//       if (startIdx === candidates.length) return;
//       buffer.push(candidates[startIdx]);
//       search(startIdx, target - candidates[startIdx]);
//       buffer.pop();
//       search(startIdx + 1, target);
//     }

//     search(0,target)

//     return answer;
//   };
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const buffer = [];
  const answer = [];

  const dfs = (start, sum) => {
    if (target === sum) {
      answer.push([...buffer]);
      return;
    }
    if (sum > target) return;
    if (start === candidates.length) return; // 더 탐색할부분이 없다
    buffer.push(candidates[start]);
    dfs(start, sum + candidates[start]);
    buffer.pop();
    dfs(start + 1, sum);
  };

  dfs(0, 0);

  return answer;
};
// @lc code=end
