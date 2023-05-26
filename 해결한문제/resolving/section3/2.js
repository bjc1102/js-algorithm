function solution(s) {
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  const len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) return "NO";
  }

  return "YES";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
