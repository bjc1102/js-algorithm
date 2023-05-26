/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dy = Array.from({ length: n + 4 }, () => 0);

  dy[1] = 1;
  dy[2] = 2;
  //한칸으로 올 수 있는 모든 경우와
  //두칸으로 올 수 있는 모든 경우를 더한다

  for (let i = 3; i < dy.length; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  return dy[n];
};
