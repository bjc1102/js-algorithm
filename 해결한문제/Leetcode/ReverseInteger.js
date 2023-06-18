/**
 * @param {number} x
 * @return {number}

 0이 맨앞으로 오면 삭제
 */
var reverse = function (x) {
  const isPlus = x > 0;
  let answer = 0;
  let absX = Math.abs(x);

  while (absX > 0) {
    answer = answer * 10 + (absX % 10);
    absX = Math.floor(absX / 10);
  }

  if (!isPlus) answer = -answer;
  // 결과값이 32비트 부호 있는 정수 범위를 벗어나는 경우 0을 반환합니다.
  if (answer < Math.pow(-2, 31) || answer > Math.pow(2, 31) - 1) {
    return 0;
  }

  return answer;
};
