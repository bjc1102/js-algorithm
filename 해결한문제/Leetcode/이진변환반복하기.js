/**
 *
 * s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수
 */

function solution(s) {
  let answer = [0, 0]; // 0번 인덱스는 이진변환 횟수, 1번 인덱스는 제거된 모든 0의 갯수

  while (s !== "1") {
    let str = "";
    for (const char of s) {
      if (char === "1") {
        str += char;
      } else answer[1] += 1;
    } // 0갯수 세기

    // str의 길이를 이진법으로 변환 후 s에 문자열로 넣기
    s = str.length.toString(2);
    answer[0] += 1;
  }
  return answer;
}

console.log(solution("1111111"));
