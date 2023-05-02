// 각 행의 합, 열의 합, 대각선의 합 중 가장 큰 합을 출력할 것
function solution(arr) {
  const len = arr.length;
  let answer = Number.MIN_SAFE_INTEGER;

  // i와 j의 순서를 바꾸면 된다?
  for (let i = 0; i < len; i++) {
    let sum1 = (sum2 = 0);
    for (let j = 0; j < len; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
      answer = Math.max(sum1, sum2, answer);
    }
  }

  let sum1 = (sum2 = 0);
  for (let i = 0; i < len; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][len - i - 1];
  }

  return Math.max(sum2, sum1, answer);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
