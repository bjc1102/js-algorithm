function solution(n) {
  let answer = 0;
  let str = n.toString(3).split("").reverse().join("");

  answer = parseInt(parseInt(str, 3).toString(10));

  return answer;
}

console.log(solution(45));
