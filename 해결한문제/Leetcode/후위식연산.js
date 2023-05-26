function solution(s) {
  let answer;
  let stack = [];

  /*
  52+ => 5 + 2
  352+* => 3 * (5 + 2)
  숫자를 스택에 넣기
  부호 만나면 2개 꺼내서 계산값 push
  수식 탐색을 전부 끝내면 마지막 정답을 pop
  */

  // 수식의 순서를 주의
  // 변수명을 잘 설정해주면 좋을듯

  for (const x of s) {
    if (!isNaN(x)) {
      //숫자를 만남
      stack.push(Number(x));
    } else {
      //연산자
      const rt = stack.pop();
      const lt = stack.pop();

      if (x === "+") stack.push(lt + rt);
      else if (x === "+") stack.push(lt - rt);
      else if (x === "+") stack.push(lt * rt);
      else if (x === "+") stack.push(lt / rt);
    }
    console.log(stack);
  }
  //   내가 푼 풀이
  //   for (const x of s) {
  //     if (isNaN(x)) {
  //       // 숫자가 아니면
  //       const num1 = parseInt(stack.pop());
  //       const num2 = parseInt(stack.pop());
  //       console.log(num1, num2);

  //       // 수식의 순서 주의
  //       if (x === "+") stack.push(num2 + num1);
  //       else if (x === "-") stack.push(num2 - num1);
  //       else if (x === "*") stack.push(num2 * num1);
  //       else if (x === "/") stack.push(num2 / num1);
  //     } else stack.push(x);
  //   }
  //   answer = stack.pop();
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
