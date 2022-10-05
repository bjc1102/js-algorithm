function solution(k, arr){
    // 내가 푼 풀이
    // let lt = 0;
    // let rt = k;
    // let sum = arr.slice(lt,rt).reduce((a,b) => a+b);
    // const len = arr.length
    // let answer = sum;
    // /*
    // 연속된 k일동안 최대 매출액을 구한다
    // 길이가 k만큼 고정되있는 상황에서 그 사이의 합을 구한다
    //  */
    // for(rt; rt < len; rt++) {
    //     //이전값을 뺴고 다음값을 더한다
    //     sum += arr[rt] - arr[lt]
    //     lt += 1
    //     answer = Math.max(sum, answer)
    // }

    //슬라이딩 윈도우
    let answer = 0;
    let sum = 0;
    const len = arr.length
    // 굳이 lt를 선언하지 않고 i - k를 하는것과 같다
    for(let i = 0; i < k; i++) sum += arr[i]

    for(let rt = k; rt < len; rt++) {
        //이전값을 뺴고 다음값을 더한다
        sum += arr[rt] - arr[rt - k] // 슬라이딩 윈도우 계속 밀고 간다
        answer = Math.max(sum, answer)
    }





    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
