function solution(s) {
  let answer = "YES";
  const stack = [];

  /*
 ( -> push
 ) -> pop
    스택의 길이가 0이면 YES    
*/

  // (가 없는데 )가 있으면 안된다
  // 만약 )가 더 많으면?..

  // 다 생각했는데 구현하려는 생각이 부족했다.
  for (const char of s) {
    if (char === "(") stack.push(char);
    else {
      if (stack.pop() === undefined) return "NO";
    }
  }
  if (stack.length !== 0) answer = "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
