/**
 * @param {string} s
 * @return {string}

 문자열을 뒤집는데 모음만 뒤집는다
 */
const reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const arr = s.split("");

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // 출발점부터 모음 찾기
    while (left < right && !vowels.has(arr[left])) {
      left++;
    }
    // 끝 지점부터 모음 찾기
    while (left < right && !vowels.has(arr[right])) {
      right--;
    }
    // 역순으로 바꾸기, 이미 바꾼 경우 패스
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
};
