function solution(need, plan) {
  let answer = "YES";
  /*
    순서대로 짜야한다
    plan 문을 돌리면서 a의 카운터를 하나씩 증가시킨다..
    카운터가 길이만큼 됐다면 성공

    need는 반드시 들어야할 과목의 순서
    plan은 수강신청한 과목의 순서이다
  */

  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO"; // 돌면서 잘못된 설계가 아닌지 봐야함
    }
  }

  // 내가 푼 풀이
  // 만약 CABA처럼 잘못된 강의를 먼저 듣고 BA가 되버리면 정상적으로 처리될 수 있따
  //   let counter = 0;
  //   for (const char of plan) if (need[counter] === char) counter++;
  //   if (counter !== need.length) return "NO";

  return answer;
}

let a = "CBA";
let b = "CADBGE";
console.log(solution(a, b));
