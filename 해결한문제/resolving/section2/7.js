// 자신의 상하좌우보다 큰 값은 봉우리다.
/**
 * 오랜만에 풀어서 그런지 flag를 생각하지 못하고
 * true가 되는 케이스들로 if문을 넣다보니 에러가 어디서 발생했는지
 * 찾질 못했다
 * 게다가 answer의 변수 선언을 const로 하고
 * 이후 flag문의 위치를 첫 번째 루프에 넣는 여러 실수를 했다
 *
 * 코테 다시 감잡기라고 생각하고 다시 꾸준히 해야겠다.
 * . */

function solution(arr) {
  let answer = 0;
  const len = arr.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let flag = 1;

      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < len &&
          ny >= 0 &&
          ny < len &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag === 1) answer += 1;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
