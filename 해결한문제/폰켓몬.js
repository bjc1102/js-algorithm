// [3, 1, 2, 3]
// [3, 3, 3, 2, 2, 4]
// [3, 3, 3, 2, 2, 2]

function solution(nums) {
    let answer = 0;
    const len = nums.length
    // 많은 종류의 포켓몬으로 만들어야 한다
    /*중복을 없애고 뽑을 수 있는게 배열보다 크다면 배열의 길이를 리턴한다*/
    const overlap = nums.filter((v,index) => nums.indexOf(v) === index)

    if(len / 2 > overlap.length) { //뽑을 수 있는게 배열보다 크다
        answer = overlap.length
    } else {
        answer = len / 2
    }
    return answer;
}

console.log(solution([3, 1, 2, 3]))