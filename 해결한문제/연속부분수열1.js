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

    // for(let rt = 0; rt < len; rt++) {
    //     sum += arr[rt];
    //     if(sum === m) answer++;
    //     while(sum >= m) { // 계속 큰 상태라면 계속 뺴야한다
    //         sum -= arr[left++]
    //         if(sum === m) answer++
    //     }
    // }


    //  내가 푼 풀이
    while (right < len) {
        // sum = arr.slice(left, right + 1).reduce((a,b) => a+b) // 사이에 있는 모든 배열 더하기 인줄 알았으나 하나씩 더해가니 right만 더하면 됨
        sum += arr[right] //왜 무한루프에 빠지는 것인가
        console.log(sum)
        // console.log(arr[right])
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

let a=[1, 1, 1, 2, 4, 1, 1, 2];
console.log("정답은 ? ", solution(6, a));
