function solution(numbers, hand) {
  let answer = "";
  let lh = 999;
  let rh = 999;

  const keyboard = [
    [1, 4, 7, 999],
    [2, 5, 8, 0],
    [3, 6, 9, 999],
  ];

  const len = numbers.length;

  function findIndex(ci, target) {
    for (let i = 0; i < 3; i++) {
      const check = keyboard[i].indexOf(target);
      if (check !== -1) {
        // 가운데 있는 수가 아니면 움직일 때 +1 값이 늘어난다
        return i === 1 ? Math.abs(ci - check) : Math.abs(ci - check) + 1;
      }
    }
  }

  for (let i = 0; i < len; i++) {
    const num = numbers[i];
    if (keyboard[1].includes(num)) {
      // 가운데 있을떄
      const ci = keyboard[1].indexOf(num);
      const li = findIndex(ci, lh);
      const ri = findIndex(ci, rh);

      // li와 ri가 같다면
      if (li === ri) {
        if (hand === "right") {
          rh = num;
          answer += "R";
        } else {
          lh = num;
          answer += "L";
        }
      }
      // li가 더 작다면(가깝다면)
      else if (li < ri) {
        lh = num;
        answer += "L";
      }
      // ri가 더 작다면(가깝다면)
      else {
        rh = num;
        answer += "R";
      }
    }
    // 가운데 숫자가 아니라면
    else {
      if (keyboard[0].includes(num)) {
        answer += "L";
        lh = num;
      } else {
        answer += "R";
        rh = num;
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
