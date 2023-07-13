/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}

 n까지의 숫자 중 선택한 숫자를 찾아내는 것
 */
var guessNumber = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const target = Math.ceil((right + left) / 2);
    const result = guess(target);
    if (result === 0) return target;
    // -1이라면 target이 더 크다 따라서 줄여야한다
    if (result === -1) right = target - 1;
    else left = target + 1;
  }
};
