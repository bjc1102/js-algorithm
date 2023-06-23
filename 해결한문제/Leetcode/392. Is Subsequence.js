/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

두 개의 문자열이 주어졌을 떄 하위 문자열인지 확인
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let anchor = 0;
  //현재 위치의 값을 찾으면 다음 값으로 앵커를 옮긴다.
  for (let i = 0; i < t.length; i++) {
    if (s[anchor] === t[i]) anchor += 1;
    if (anchor === s.length) return true;
  }

  `
  서로 비어있는 경우가 있다면 위에서 true로 걸러지지 않았다
  따라서 엣지 케이스를 위해 한번 더 검증하는 문장을 추가했다.
  `;
  return anchor === s.length;
};
