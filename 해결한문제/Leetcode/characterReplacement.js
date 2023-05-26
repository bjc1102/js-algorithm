/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 *
 * s문자열 중 k개를 바꿀 수 있디.
 * 바꿨을 때 연속되는 문자열 중 가장 큰 문자열 길이를 return
 */
var characterReplacement = function (s, k) {
  const len = s.length;
  let lt = 0;
  //가장 많이나온 문자의 갯수
  let oft = 0;
  let answer = 0;
  const map = new Map();

  for (let rt = 0; rt < len; rt++) {
    if (map.has(s[rt])) map.set(s[rt], map.get(s[rt]) + 1);
    else map.set(s[rt], 1);

    // 계속 넣어가면서 비교할 예정
    oft = Math.max(map.get(s[rt]), oft);

    //rt와 lt 사이 문자들 중 가장 많이 나온 문자를 제외했을 때 남은 문자의 수가 바꿀 수 있는 k보다 크다면
    //k가 다시 돌아올 떄까지 뺴줘야한다
    //0이 들어가니까 +1
    while (rt - lt + 1 - oft > k) {
      map.set(s[lt], map.get(s[lt]) - 1);
      lt += 1;
    }

    answer = Math.max(rt - lt + 1, answer);
  }
  return answer;
};
