function solution(ingredient) {
  let answer = 0;
  const stack = [];
  const len = ingredient.length;
  stack.push(ingredient[0]);
  stack.push(ingredient[1]);
  stack.push(ingredient[2]);

  for (let i = 3; i < len; i++) {
    if (ingredient[i] === 1 && stack.length > 2) {
      // 3개를 뽑고 비교? 아니면 그냥 비교
      const tmp = [];
      let flag = true;
      while (tmp.length < 3) {
        tmp.unshift(stack.pop());
      }
      for (let j = 0; j < 3; j++) {
        if (tmp[j] !== j + 1) flag = false;
      }
      // 만약 숫자가 일치하지 않으면 다시 넣기
      if (flag) answer += 1;
      else stack.push(...tmp, 1);
    } else stack.push(ingredient[i]);
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 1, 3, 1, 2, 3, 1]));
