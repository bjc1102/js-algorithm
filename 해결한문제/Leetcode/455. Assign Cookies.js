/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 
 자녀와 쿠키가 있는데 자녀는 탐욕수치가 있다.
 탐욕 수치는 쿠키의 크기와 연관되어 있다. 크거나 같은 크기의 쿠키를 주면 만족한다
 몇명이 만족할 수 있는지?
 */
var findContentChildren = function(g, s) {
    const childs = g.sort((a,b) => a - b)
    const cookies = s.sort((a,b) => a - b)
    let answer = 0

    while(childs.length > 0 && cookies.length > 0) {
        if(cookies[0] >= childs[0]) {
            answer += 1
            childs.shift()
            cookies.shift()
        } else {
            cookies.shift()
        }

    }
    return answer
};
