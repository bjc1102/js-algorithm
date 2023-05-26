function solution(s) {
  const str = s.toUpperCase();
  const len = str.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) return "NO";
  }

  return "YES";
}

let str = "gooG";
console.log(solution(str));
