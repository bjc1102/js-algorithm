/**
 * @param {number} n
 * @return {number}
 *
 * 피보나치 해당 인덱스 숫자를 리턴하는 문제
 */
var fib = function (n) {
  const dy = Array.from({ length: n + 4 }, () => 0);
  dy[0] = 0;
  dy[1] = 1;
  dy[2] = 1;
  for (let i = 3; i < n + 4; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]; // dy[3] = dy[1] + dy[2]
  }

  return dy[n];
};
