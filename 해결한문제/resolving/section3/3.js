function solution(str) {
  str = str.toLowerCase().replace(/[a-z]/g, "");

  return Number(str);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
