// var findMaxAverage = function(nums, k) {
//     let answer = 0;
//     let lt = 0;
//     let rt = k;
//     for (let i = 0; i < k; i++) {
//         answer += nums[i];
//     }

//     for (rt; rt < nums.length; rt++) {
//         const curr = answer / k;
//         const next = (answer - nums[lt] + nums[rt]) / k;
//         if (next > curr) {
//             answer = answer - nums[lt] + nums[rt];
//         }
//         lt++;
//     }

//     return answer / k;
// };
/*
슬라이딩 윈도우로 풀 수 있다는 것을 깨닫고 lt, rt라는 포인터를 설정했다.
윈도우를 만들고 한칸씩 옮기며 최대값을 찾는 방식으로 구현했는데, 이때 k = 1일 때 문제가 생긴다
내가 answer라는 변수 하나만으로 최댓값을 저장하고 찾으려고해서, 최대값에서 변수를 빼는 문제가 생겼다.

정리 : 현재 구해지는 값(슬라이딩 윈도우의 추가하고 빠지는 계산 값)과 최대 평균값은 다른데 하나의 변수(최대 평균값)만을 사용해서 하려다 생긴 문제이다
테스트 케이스가 통과해버려 많이 헷갈렸는데, 주어진 테스트 케이스가 정수 범위다보니 - 되는 값이 최대값을 찾아내는 오류였다고 생각한다

 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxAverage = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    maxAverage = Math.max(maxAverage, sum / k);
  }

  return maxAverage;
};
