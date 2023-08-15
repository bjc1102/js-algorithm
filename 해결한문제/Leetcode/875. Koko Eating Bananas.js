/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}

각 시간마다 바나나 더미 중 하나를 선택하고 그 더미에서 k개의 바나나를 먹는다 
더미에 k개보다 적은 바나나가 있다면, 모두 먹고 이 시간 동안 추가적으로 바나나를 먹지 않습니다.

시간당 최소 몇개(k)를 먹어야 h 시간안에 다 먹을 수 있는지?
바나나 갯수를 모두 더해서 최소 넘어가는 갯수를 구한다? 

가장 빨리먹을 떄와 가장 적게 먹을 때의 중간값
 */
var minEatingSpeed = function(piles, h) {
    let left = 0;  // 가능한 최소 속도는 1
    let right = Math.max(...piles);  // 가능한 최대 속도는 가장 많은 바나나가 있는 더미의 바나나 수

    //모든 조건을 만족하는 최적의 해를 찾아야한다
    //left < right의 경우 탐색 범위가 딱 한 개의 요소만 남았을 때 탐색이 종료된다
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        //시간 구하기
        let count = 0;
        for(let i = 0; i < piles.length; i++) {
            // 다 먹을 수 있던 아니던 바나나가 남았다면 무조건 방문하기 때문에 소숫점을 올려야한다
            count += Math.ceil(piles[i] / mid)
        }

        //h 시간안에 다 못먹는다 -> 먹는 양을 늘려야함
        if(count > h) left = mid + 1
        //h 시간안에 다 먹는다 -> 최솟값 찾기
        if(count <= h) right = mid - 1
    }

    return left
};
