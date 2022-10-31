function solution(s) {
  let answer = "";
  const str = s.split("");
  str[0] = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") str[i] = str[i].toUpperCase();
    else str[i] = str[i].toLowerCase();
  }

  answer = str.join("");

  return answer;
}

console.log(solution("3people unFollowed me"));
