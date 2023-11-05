/**
 * @param {number} num
 * @return {number}
  보수 구하기
 */
var findComplement = function(num) {
    const comp = num.toString(2)
    let answer = ""

    for(const char of comp) {
        if(char === "0") answer += 1
        if(char === "1") answer += 0
    }


    return parseInt(answer,2)
};
