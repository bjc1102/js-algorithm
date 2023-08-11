/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const answer = [];

    potions.sort((a, b) => a - b); // 물약 배열을 오름차순으로 정렬

    for (let i = 0; i < spells.length; i++) {
        const spell = spells[i];
        let left = 0;
        let right = potions.length - 1;

        // 포함되지 않는 길이를 계산해서 전체 길이에서 뺀다
        // left 이하로는 포함되지 않는다
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const potion = spell * potions[mid];

            if (potion >= success) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const count = potions.length - left; // 조건을 만족하는 물약의 개수 계산
        answer.push(count);
    }

    return answer;
};
