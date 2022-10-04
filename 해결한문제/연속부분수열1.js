function solution(m, arr){
    /*
     for문을 돌려서 투 포인터로 시작과 끝을 자목. 그 사이에 있는 모든 수를 더한다 ??
     이게 투 포인터는 아닌거같은데..

     투포인터 위치를 적절히 변환하는게 목표이다
    */
    let answer=0;
    let sum = 0;
    let right = 0;
    let left = 0;
    const len = arr.length

    while (right < len) {
        sum = arr.slice(left, right + 1).reduce((a,b) => a+b)
        console.log(sum)
        if(sum === m) {
            sum -= arr[left++]
            answer++
        }
        else if(sum < m) {
            right++
        }
        else { // sum > m인 경우
            sum -= arr[left++]
        }
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log("정답은 ? ", solution(6, a));
