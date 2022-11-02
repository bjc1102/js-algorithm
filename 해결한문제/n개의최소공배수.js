function solution(arr) {
  let answer = 0;
  let start = 1;
  const len = arr.length;
  let max = arr[arr.length - 1]; // 현재 배열의 최댓값

  while (true) {
    let count = 0;
    for (let i = 0; i < len - 1; i++) {
      if ((max * start) % arr[i] === 0) {
        count += 1;
      }
    }

    if (count === len - 1) return start * max;
    else start += 1;
  }
}

console.log(solution([2, 6, 8, 14]));
