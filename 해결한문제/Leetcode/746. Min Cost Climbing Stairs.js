/**
 * @param {number[]} cost
 * @return {number}
 
 효율적인 계단 올라가기
 한칸 혹은 두칸을 올라갈 수 있다.
 가장 효율적으로 올라갔때의 비용을 계산해라

 계단을 먼저 올라가고 어떻게 내가 올라오면 효과적이었을까로 생각해본다
 */
var minCostClimbingStairs = function(cost) {
    //dy는 코스트를 저장한다.
    const dy = Array.from({ length: cost.length + 1 }, () => 0);
    dy[0] = cost[0];
    dy[1] = cost[1];

    for(let i = 2; i < dy.length; i++) {
        dy[i] = Math.min(dy[i - 1], dy[i - 2]) + cost[i]
    }

    return Math.min(dy[cost.length - 2], dy[cost.length - 1])
};
