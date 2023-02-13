/*
 * @lc app=leetcode id=1523 lang=javascript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 *
 * low와 high 사이에 odd 숫자 구하기
 */
var countOdds = function (low, high) {
  let answer = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) answer += 1;
  }

  return answer;
};

/**
 * 위 모든 경우를 찾아보는 코드에서 확장시켜보면
 * 처음 홀수인지 아닌지를 확인하고 high의 범위까지 2단 점프 해도 된다
 *
 * 이렇게 가정하면 다음과 같은 공식이 나온다.
 * x, x+2, x+4, x+6
 * 여기까지 밖에 생각 못했는데 이러한 가정을 통해 다음과 같은 공식이 유도된다고 한다
 * (high - low) / 2 + 1
 */
var countOdds = function (low, high) {
  if (low % 2 === 0) low += 1;
  return low > high ? 0 : Math.floor((high - low) / 2) + 1;
};
// @lc code=end
