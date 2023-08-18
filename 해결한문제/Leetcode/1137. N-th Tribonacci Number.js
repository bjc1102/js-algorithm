/**
 * @param {number} n
 * @return {number}

 t4 = t1 + t2 + t3
 */
var tribonacci = function (n) {
    const dy = [0,1,1]

    for(let i = 3; i <= n; i++) {
        dy.push(dy[i - 1] + dy[i - 2] + dy[i - 3])
    }

    return dy[n]
};
