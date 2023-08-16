/**
 * @param {string} digits
 * @return {string[]}

  숫자 2에서 9까지 (포함)의 숫자로 이루어진 문자열이 주어졌을 때, 해당 숫자가 나타낼 수 있는 모든 가능한 문자 조합을 반환
 */
var letterCombinations = function(digits) {
    // 숫자와 문자 매핑
    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    const combinations = [];
    const digitsLetter = digits.split("");

    const dfs = (idx, currentCombination) => {
        if (idx === digitsLetter.length) {
            if (currentCombination.length > 0) {
                combinations.push(currentCombination);
            }
            return;
        }

        const digit = digitsLetter[idx];
        const letters = mapping[digit];

        for (const letter of letters) {
            dfs(idx + 1, currentCombination + letter);
        }
    };

    dfs(0, "");
    return combinations;
};
