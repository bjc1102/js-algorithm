function solution(s) {
  /*
    소괄화 사이에 있는 문자만 제거하기

    (를 넣고 다음 )를 만날떄까지 continue로 넘어간다
*/
  let answer = "";
  const stack = [];

  //  닫는 괄호빼고 다 넣는다
  //  닫는 괄호 만나면 stack 돌면서 여는 괄호 전부 다 지워주기
  for (const char of s) {
    if (char === ")") {
      //닫는 괄호를 만나면 자기 짝을 만날떄까지 다 뺴버린다
      while (stack.pop() !== "("); // 하나 뽑아서 확인해본다
    } else stack.push(char);
  }
  console.log(stack);
  answer = stack.join("");

  // 내가 푼 방법
  //   for (const char of s) {
  //     if (char === "(") stack.push("(");
  //     else if (char === ")") stack.pop();
  //     else {
  //       if (stack.length === 0) answer += char;
  //     }
  //   }

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
