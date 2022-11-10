/**
 * @param {number[]} prices
 * @return {number}
 *
 * 최소일때 사서 최대일 때 판다고 할떄 그 차이 값을 return
 *
 * 최솟값과 최댓값을 만들어 저장하고
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let sell = 0;

  for (let i = 1; i < prices.length; i++) {
    //최솟값이 나오면 바꾼다
    min = Math.min(prices[i], min);
    // 최솟값과 계속해서 이후에 나오는 값들을 비교해나간다
    sell = Math.max(sell, prices[i] - min);
  }
  return sell;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
