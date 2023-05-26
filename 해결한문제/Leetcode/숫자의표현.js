/**
 * DFS?
 * 연속한 자연수
 * 슬라이딩 윈도우
 */
function solution(n) {
  let answer = 0;
  let sum = 1;
  let lt = 0;
  let rt = 1;
  while (lt !== n && rt !== n) {
    if (sum === n) {
      answer += 1;
      lt += 1;
      sum -= lt;
    } else {
      if (sum > n) {
        lt += 1;
        sum -= lt;
      } else {
        rt += 1;
        sum += rt;
      }
    }
  }
  //마지막 숫자가 자기 자신일 경우가 빠졌기때문에 + 1
  return answer + 1;
}

console.log(solution(15));
