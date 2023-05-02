function solution(arr) {
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    rank = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) continue;
      if (arr[i] < arr[j]) rank += 1;
    }
    answer += " " + rank;
  }

  return answer;
}

let arr = [85, 90, 90, 90];
console.log(solution(arr));
