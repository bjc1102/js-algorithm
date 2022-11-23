/**
 * @param {string} s
 * @return {string}
 *
 * s가 암호화된 문자열로 주어진다
 *
 * 숫자와 문자로 이루어져있는데 숫자만큼 괄호 안 문자를 반복한다
 *
 * 최종적으로 모두 풀어내면 된다
 *
 * .repeat라는 함수가 있는데 문자열 갯수만큼 반복해준다
 * [를 만나면 마지막 문자가 숫자라는 뜻
 * ]를 만나면 문자가 끝이라는 뜻
 *
 * ]를 만나서 다 뻈는데 스택이 남아있다면 스택에 완성 문자열을 다시 넣어준다.
 *
 * 숫자의 대한 문자처리가 필요하다 한 자릿수 밖에 처리가 안됨.
 */
const popString = (stack) => {
  let tmp = "";

  while (stack[stack.length - 1] !== "[") {
    tmp = stack.pop() + tmp;
  }
  stack.pop(); // [ 만나서 종료

  return tmp;
};

const parseNumber = (stack) => {
  let number = "";
  let current = stack.pop();

  // NaN일때 true를 뱉는다 따라서 NaN이 안나올떄까지 더해준다
  while (!Number.isNaN(Number(current))) {
    number = current + number;
    current = stack.pop();
  }

  stack.push(current);

  return Number(number);
};

var decodeString = function (s) {
  let answer = "";

  const stack = [];

  for (const char of s) {
    if (char !== "]") stack.push(char);
    else {
      // ]를 만났을 떄
      const tmp = popString(stack);
      const number = parseNumber(stack); // 숫자가 나옴

      const decode = tmp.repeat(number);
      stack.push(decode);
    }
  }

  return stack.join("");
};
