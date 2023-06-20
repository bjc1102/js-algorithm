/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const answer = [];

  for (let i = 0; i < candies.length; i++) {
    answer.push(candies[i] + extraCandies >= max);
  }

  return answer;
};
