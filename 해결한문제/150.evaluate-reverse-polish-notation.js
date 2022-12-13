/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 *
 * 후위표기식 문제이다
 */
var evalRPN = function (tokens) {
  if (tokens.length === 0) return 0;
  const stack = [];

  for (const token of tokens) {
    const symbol = parseInt(token);
    if (isNaN(symbol)) {
      console.log(token);
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (token === "+") stack.push(num1 + num2);
      if (token === "-") stack.push(num1 - num2);
      if (token === "*") stack.push(num1 * num2);
      if (token === "/") stack.push(num1 / num2);
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};

/**
 *
 * @param {*} tokens
 * @returns
 *
 * 객체로 표현하면 훨씬 깔끔하게 표현할 수 있다.
 */
function evalRPN(tokens) {
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => ~~(a / b),
  };

  const stack = [];

  for (let n of tokens) {
    if (ops[n] != null) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(ops[n](a, b));
    } else {
      stack.push(Number(n));
    }
  }

  return stack[0];
}
// @lc code=end
