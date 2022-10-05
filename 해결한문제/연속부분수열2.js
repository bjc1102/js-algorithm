function solution(m, arr){
    let answer=0, sum=0, lt=0;
    const len = arr.length
    /*
       결국 모든 경우를 뒤져봐야한다
       rt와 lt의 간격이 1~arr.length일때까지
     */

    /*
    풀이를 보니 기존 투포인트 배열과 유사하게 풀 수 있는 문제다.
    내가 못찾은 부분은 원소 사이에 갯수를 찾지 못한게 문제였던거같다
     */
    for(let rt = 0; rt < len; rt++) {
        //answer는 누적 계산치라 answer +=를 해줘야 한다
        sum += arr[rt]
        while(sum > m) {
            sum -= arr[lt++]
        }
        // 무조건 해준다
        // 이 수식을 찾을 수 있나.. 이게 문제다.
        answer += rt - lt + 1
    }


    // 내가 푼 풀이
    // for(let i = 0; i < len; i++) {
    //     lt = 0
    //     let rt = i + 1
    //     while(rt <= len) {
    //         let sum = arr.slice(lt++,rt++).reduce((a,b) => a+b)
    //         if(sum <= m) {
    //             console.log(arr.slice(lt-1, rt-1))
    //             answer++
    //         }
    //     }
    // }


    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
