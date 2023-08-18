/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}

 숫자 조합 구하기
 k개의 숫자로 n을 만드는 경우의 수를 구하여라
 1~9까지의 숫자로만 조합할 것

----
조합이 필요하니 배열로 넘겨줘야한다.
마지막으로 들어온 숫자보다는 커야하니까 현재 들어간 숫자를 넘겨줘야한다.
sum도 넘겨줘야한다.


숫자가 n보다 커진다면 리턴
----

 */
var combinationSum3 = function(k, n) {
    const answer = []
    const dfs = (combi, sum, last) => {
        if(combi.length > k || sum > n) return;
        if(combi.length === k && sum === n) {
            answer.push(combi)
            return
        }
        
        for(let i = last + 1; i < 10; i++) {
            dfs([...combi, i], sum + i, i)
        }
    }

    dfs([],0,0)

    return answer
};
