/**
 *
 * 2진법으로 바꾼다음에 or연산 하면됨
 */

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const bin1 = arr1[i].toString(2).padStart(n, "0");
    const bin2 = arr2[i].toString(2).padStart(n, "0");
    const len = bin1.length;

    let tmp = "";
    for (let j = 0; j < len; j++) {
      if (bin1[j] === "1" || bin2[j] === "1") {
        tmp += "#";
      } else {
        tmp += " ";
      }
    }
    answer.push(tmp);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
