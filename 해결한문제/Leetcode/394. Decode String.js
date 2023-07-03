/**
 * @param {string} s
 * @return {string}
 문장 해독하기
 주의사항
 내부적으로 중첩될 때, 숫자가 10 이상일 때
 */
var decodeString = function (s) {
  const stack = [];
  let number = "";
  let result = "";

  for (const char of s) {
    if (!isNaN(char)) {
      number += char;
    } else if (char === "[") {
      stack.push(number);
      stack.push(result);
      number = "";
      result = "";
    } else if (char === "]") {
      //문자열
      const prevResult = stack.pop();
      //반복횟소
      const repeatCount = parseInt(stack.pop());

      result = prevResult + result.repeat(repeatCount);
    } else {
      // 굳이 스택에 하나씩 넣지 않고 그냥 하나의 문자열로 처리한다
      result += char;
    }
  }

  return result;
};
