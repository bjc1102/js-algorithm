function solution(students) {
  let max = -1;
  let cnt = 0;

  for (let i = 0; i < students.length; i++) {
    if (max < students[i]) {
      max = students[i];
      cnt++;
    }
  }

  return cnt;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
