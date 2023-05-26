/**
 *
 * @param {} m: 제한시간
 * @param {} arr: 문제 점수와 푸는데 걸리는 시간
 *
 * dy를 시간순으로 초기화하고 해당 시간에 구할 수 있는 최대값으로 계속 변경해나간다
 * 이번엔 중복을 허용할 수 없다. -> 뒤에서부터 앞으로 돌면 피할 수 있다
 */
function solution(m, arr) {
  let answer = 0;
  const dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];

    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }

  answer = dy[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
