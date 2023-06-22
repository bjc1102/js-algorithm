/**
 * @param {character[]} chars
 * @return {number}

chars라는 주어지는 배열에서 값을 변경하고 리턴해야한다
새로운 배열을 만드는게 아님
리턴 값은 압축된 문자열의 길이까지만 계산해야한다.
문제가 너무 어려워서 처음에 배열이 왜 안만들어지는건지 너무 헷갈렸다
 */

const compress = (chars) => {
  let count = 1; // 현재 문자의 개수를 나타내는 변수
  let iterate = 0; // 압축된 문자열의 인덱스를 나타내는 변수

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      // 현재 문자와 다음 문자가 동일한 경우
      count++;
    } else if (count === 1) {
      // 현재 문자의 개수가 1인 경우
      chars[iterate++] = chars[i]; // 압축되지 않은 문자를 배열에 추가
    } else if (count < 10) {
      // 현재 문자의 개수가 2 이상 9 이하인 경우
      chars[iterate++] = chars[i]; // 압축되지 않은 문자를 배열에 추가
      chars[iterate++] = count.toString(); // 문자의 개수를 문자열로 변환하여 배열에 추가
      count = 1; // 문자의 개수 초기화
    } else {
      // 현재 문자의 개수가 10 이상인 경우
      const s = count.toString().split(""); // 문자의 개수를 문자열로 변환하고 각 자리수를 배열로 분리
      chars[iterate++] = chars[i]; // 압축되지 않은 문자를 배열에 추가
      for (let j = 0; j < s.length; j++) {
        chars[iterate++] = s[j]; // 각 자리수를 배열에 추가하여 압축된 문자열 생성
      }
      count = 1; // 문자의 개수 초기화
    }
  }

  return iterate; // 압축된 문자열의 길이 반환
};
