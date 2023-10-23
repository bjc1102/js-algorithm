/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
    let number = n

    while(true) {
       let target = 0
       const numberToString = number.toString();
       const digits = numberToString.split('').map(Number);

       for(const num of digits) target += num ** 2
       if(target === 1) return true
       if(set.has(target)) return false
       set.add(target)
       number = target
    }
};

/*
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = String(n)
            .split('')
            .map(Number)
            .reduce((sum, digit) => sum + digit ** 2, 0); // callback(누적값, 현재값), init
    }

    return n === 1;
 */
