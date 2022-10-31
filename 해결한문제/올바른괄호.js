function solution(s) {
  const stack = [];

  for (const x of s) {
    if (x === ")") {
      const pop = stack.pop();
      if (!pop) return false;
    } else {
      stack.push(x);
    }
  }
  return stack.length === 0 ? true : false;
}

let a = "(()(()))(()";
console.log(solution(a));
