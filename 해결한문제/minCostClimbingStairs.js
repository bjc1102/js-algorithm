/**
 * @param {number[]} cost
 * @return {number}
 *
 * cost 배열이 주어지는데
 * top으로 올라갈 수 있는 최소 비용을 구해라
 *
 * 계단은 1,2칸 밖에 움직일 수 없고 계단을 밣으면 돈을 내야한다
 */
var minCostClimbingStairs = function (cost) {
  //n일때 정답이 된다
  const dy = Array.from({ length: cost.length + 2 }, () => 0);
  dy[0] = cost[0];
  dy[1] = Math.min(dy[0] + cost[1], cost[1]);
  for (let i = 2; i < cost.length; i++) {
    dy[i] = Math.min(dy[i - 2] + cost[i], dy[i - 1] + cost[i]);
  }

  return Math.min(dy[cost.length - 1], dy[cost.length - 2]);
};
