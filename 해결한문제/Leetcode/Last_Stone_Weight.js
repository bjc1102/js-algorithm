const findNumber = (stones) => {
  const max = Math.max(...stones);
  const maxIndex = stones.indexOf(max);
  stones.splice(maxIndex, 1);

  return max;
};

/**
 * @param {number[]} stones
 * @return {number}
 *
 * 최댓값을 찾아서 두개를 비교한다
 *
 *
 *
 */

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    const max1 = findNumber(stones);
    const max2 = findNumber(stones);

    stones.push(Math.abs(max1 - max2));
  }

  return stones[0];
};
