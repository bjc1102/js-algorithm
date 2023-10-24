/**
 * @param {string} s
 * @return {string}
 *
 * 소문자+대문자 or 대문자+소문자로 연결되는 경우 제거
 * 해당 조합이 없어질때까지 반복한다
 */
function makeGood(s) {
    const stack = [];  // 빈 스택 생성

    for (const char of s) {
        // 소문자+대문자 or 대문자+소문자의 경우를 확인해야하기 때문에 유니코드로 만들어야한다
        if (stack.length > 0 && Math.abs(char.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("")
}
