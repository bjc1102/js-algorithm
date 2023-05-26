function solution(str1, str2){
    let answer="YES";
    const map = new Map()
    const len = str1.length

    for(const x of str1) {
        if(map.has(x)) map.set(x, map.get(x) + 1)
        else map.set(x, 1)
    }

    // 같은 길이의 단어가 2개 주어지니 A에 있는데 B에 없으면 걸러진다
    // AAAC / AAA 같은 경우는 없고 무조건 AAAC / AAA?가 온다 ?는 값이 상관없다
    for(const x of str2) {
        const num = map.get(x)
        if(!map.has(x) || num === 0) return "NO" // 값이 있는데 현재 0이면 이미 다 없어진 글자이니 바로 NO 리턴
        map.set(x, num - 1)
    }
    

    // 해당 문자의 갯수가 똑같아야 한다 따라서 해쉬 배열로 저장해서 구한다
    // 일단 하나를 탐색하고 값이 있는지 찾아본다 > 있으면 값을 하나씩 상쇄
    // for(let i = 0; i < len1; i++) {
    //     const char = str1[i]
    //     if(map.has(char)) map.set(char, map.get(char) + 1)
    //     else map.set(char, 1)
    // }
    //
    // for(let i = 0; i < len2; i++) {
    //     const char = str2[i]
    //     if(!map.has(char)) return "NO"
    //     const num = map.get(char) - 1
    //     map.set(char, num)
    // }
    //
    //
    // for(const [key, value] of map) {
    //     if(value !== 0) {
    //         answer = "NO"
    //         break;
    //     }
    // }

    return answer;
}

let a="AbaAeCe";
let b="baeeACA";

console.log(solution(a, b));
