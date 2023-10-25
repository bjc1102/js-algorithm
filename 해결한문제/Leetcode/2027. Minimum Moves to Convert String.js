/**
 * @param {string} s
 * @return {number}

 "X"와 "O" 문자밖에 없다. 이때 3개를 선택해서 X를 O로 변경할 수 있을 때 몇 번 선택해야 모두 O로 바뀌는지
 */
var minimumMoves = function(s) {
    let answer = 0;
    let i = 0;

    while (i < s.length) {
        if (s[i] === 'X') {
            // X를 발견하면 3개를 선택해서 O로 바꾼다.
            answer++; // +1
            i += 3;
        } else {
            // O는 패스
            i++;
        }
    }

    return answer;
};
