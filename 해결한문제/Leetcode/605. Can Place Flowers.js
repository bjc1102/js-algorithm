/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  const len = flowerbed.length;

  for (let i = 0; i < len; i++) {
    if (
      (i === 0 || flowerbed[i - 1] !== 1) &&
      flowerbed[i] !== 1 &&
      (i === len - 1 || flowerbed[i + 1] !== 1)
    ) {
      flowerbed[i] = 1;
      count++;

      if (count >= n) {
        return true;
      }
    }
  }

  return false;
};
