// 연속적으로 답을 맞추면 +1점씩 더준다

function solution(arr) {
  let score = 1;
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) score = 1;
    else {
      answer += score;
      score += 1;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
