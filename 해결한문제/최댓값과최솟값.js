function solution(s) {
  let answer = "";
  const str = s + "";

  const result = str
    .split(" ")
    .map((v) => {
      return parseInt(v);
    })
    .sort((a, b) => a - b);

  answer = `${result[0]} ${result[result.length - 1]}`;

  return answer;
}

console.log(solution("-1 -2 -3 -4"));
