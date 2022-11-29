/**
 * @param {number[]} prices
 * @return {number}
 *
 * 최소일때 사서 최대일 때 판다고 할떄 그 차이 값을 return
 *
 * 최솟값과 최댓값을 만들어 저장하고
 */
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for (const price of prices) {
    min = Math.min(price, min);
    profit = Math.max(profit, price - min);
  }

  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
