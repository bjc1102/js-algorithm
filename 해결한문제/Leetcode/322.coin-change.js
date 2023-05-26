/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * coins가 주어지고 amount를 만드는데 필요한 가장 작은 수의 코인 갯수를 반환하기
 * 동전교환 문제로 재귀나 DP로 풀 수 있던걸로 기억한다. 그리디는 최적의 해를 찾을 수 없다
 *
 * DFS는 당연하게 시간초과가 났다
 *
 * 냅색알고리즘을 통해 구현할 수 있다.
 */
// var coinChange = function (coins, amount) {
//   const len = coins.length;
//   let min = Number.MAX_SAFE_INTEGER;

//   const DFS = (sum, L) => {
//     //목표보다 커지면 종료
//     if (sum > amount) return;
//     // 기존 최솟값보다 커지면 종료
//     if (L > min) return;
//     if (sum === amount) min = Math.min(min, L);
//     else {
//       for (let i = 0; i < len; i++) {
//         DFS(sum + coins[i], L + 1);
//       }
//     }
//   };

//   // sum과 갯수
//   DFS(0, 0);

//   return min === Number.MAX_SAFE_INTEGER ? -1 : min;
// };

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * 냅색 알고리즘 -> DP로 풀려면
 * dy 각 자릿수의 값이 무슨의미를 가지고 있는지를 알아야한다.
 * dy[i]는 i 금액을 거슬러 주는데 사용된 동전의 갯수이다.
 *
 * 만약dy[1]이라면 1원을 거슬러주는데 사용된 최소 동전의 갯수가 원소로 들어간다.
 *
 * 처음 초기화하는 dy는 각 금액의 최소값을 가질 수 있도록 만들어주고
 * 동전 1원부터 1원의 최소 덩전 갯수로 금액을 맞출 수 있도록 값을 넣는다.
 * 이후 동전 2는 2원부터 초기화 할 수 있으니 2원의 위치부터 값을 넣게 되는데
 *
 * 이때 2원의 최소갯수를 교체해야하는 문제가 생긴다.
 *
 * 1원으로 초기화했을 땐 2개지만 2원으로 초기화했을 땐 하나인데 이 값은
 * 2원짜리 코인을 넣기 전 최솟값에서 하나를 더한 값이라고 생각할 수 있다
 * 쉽게 설명하면 2원짜리는 2원을 뺀 금액이 갖고있는 최소 갯수에 이번에 2원짜리 동전을
 * 하나 추가하는 것으로 구할 수 있다.
 *
 * 이것은
 * 뺀 금액의 최소갯수 + 1로 비교해본다.
 *
 * 이번엔 동전이 2원짜리가 들어오기 때문이다.
 *
 * 따라서 amount원을 거슬러주는데 사용된 최소 동전 개수를 구하려면 dy[amount]를 하면 된다
 *
 * dy[j - coins[i]] + 1 -> 이 공식이 나오는데 다음과 같다
 *
 *
 */
var coinChange = function (coins, amount) {
  const dy = Array.from({ length: amount + 4 }, () => Number.MAX_SAFE_INTEGER);
  dy[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < dy.length; j++) {
      dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1);
    }
  }

  return dy[amount] === Number.MAX_SAFE_INTEGER ? -1 : dy[amount];
};
// @lc code=end
