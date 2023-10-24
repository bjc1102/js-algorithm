/**
 * @param {number} num
 * @return {boolean}

    뒤집어도 같은지?
    맨 앞이나 맨 뒤에 0이있으면 
 */
var isSameAfterReversals = function(num) {
    const str = num.toString()

    if(str.length <= 1) return true
    if(str.at(-1) === "0" || str[0] === "0") return false

    return true
};
