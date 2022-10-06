function solution(s){
    let answer;
    let max = Number.MIN_SAFE_INTEGER
    const len = s.length
    // 내가 푼 풀이.

    // const result = s.split("").reduce((prev, curr) => { // 해시로 계산하기
    //     if(prev[curr] !== undefined) prev[curr] += 1
    //     else prev[curr] = 0
    //     return prev
    // }, {})
    //
    // for(const [key, value] of Object.entries(result)) {
    //     if(value > max) {
    //         max = value
    //         answer = key
    //     }
    // }
    /*
    Map 자료구조를 사용하면 된다 -> Object와 상당히 유사함
     */
    const map = new Map()
    for(const char of s) {
        if(map.has(char)) map.set(char, map.get(char) + 1)
        else map.set(char, 1)
    }
    for(const [key,value] of map) {
        if(value > max) {
            max = value
            answer = key
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));
