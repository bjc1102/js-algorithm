/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}

 words와 pref가 주어진다.
 각 word가 pref를 접두사로  확인하고 그 개수를 반환
 */
var prefixCount = function(words, pref) {
    
    let count = 0

    for(const word of words) {
        // js에는 내장함수 startsWith가 있다
        if(word.startsWith(pref)) count+=1
    }

    return count
};
