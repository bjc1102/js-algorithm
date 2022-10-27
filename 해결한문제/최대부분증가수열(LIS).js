/**
 * 증가하는 수열 중 가장 긴 길이를 찾기
 *
 * 규칙을 어떻게 세워야할까?
 *
 *
 * arr의 i번째 숫자가 마지막 숫자가 되는 경우로 설정해서 찾는다
 * i번째 숫자일 때 i보다 작은 숫자 중 가장 큰 값을 선택해서 + 1한다
 *
 * 그냥 실제로 예시를 돌려보면서 찾는게 제일이다
 *
 * LIS는 다이나믹 주제로 가장 유명함
 */
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  //   let counter = arr.length;
  //   const len = arr.length;

  // 다이나믹 안쓰고 풀었따. 이중 for문이라 실패
  //   for (let i = 0; i < len - 1; i++) {
  //     if (answer >= counter) break;
  //     else {
  //       const check = [arr[i]];
  //       for (let k = i + 1; k < len; k++) {
  //         // k값은 순차적으로 증가하는데 이상한 값이랑 비교하고 있었다..
  //         if (arr[k] > check[check.length - 1]) {
  //           check.push(arr[k]);
  //         }
  //         console.log(check);
  //       }
  //       answer = Math.max(answer, check.length);
  //       counter -= 1;
  //     }
  //   }
  const len = arr.length;
  const dy = Array.from({ length: arr.length }, () => 1);
  dy[0] = 1;

  for (let i = 1; i < len; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      // 수열 조건에 맞는 항이 될 수 있으면서 max값이 바뀌어야 한다
      // for문 조건을 잘 못줘서 헤맸다
      if (arr[j] < arr[i] && dy[j] > max) max = dy[j];
    }
    dy[i] = max + 1;
  }

  answer = Math.max(...dy);
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4, 12, 15, 25];
console.log(solution(arr));
