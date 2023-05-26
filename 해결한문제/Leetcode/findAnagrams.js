/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 *
 * p의 길이 만큼 문자열 s를 잘랐을 때 순서 상관없이 p 문자열이 될 수 있다면 해당 인덱스를 반환한다
 *
 * 해쉬 + 슬라이딩 윈도우
 */
const compareHash = (map, checkmap) => {
  for (const key of map.keys()) {
    if (!checkmap.has(key) || map.get(key) !== checkmap.get(key)) return false;
  }
  return true;
};

var findAnagrams = function (s, p) {
  const answer = [];
  const len = p.length;
  const slen = s.length;
  const map = new Map();
  const checkmap = new Map(); // 계속 움직이는 해쉬맵
  let lt = 0;
  let rt = len - 1;

  if (len > slen) return [];

  // p로 hashmap 만들기
  for (const char of p) {
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  //s로 hashmap 만들기
  for (let i = 0; i < len; i++) {
    if (checkmap.has(s[i])) checkmap.set(s[i], checkmap.get(s[i]) + 1);
    else checkmap.set(s[i], 1);
  }

  // p, s인지 비교 true면 push아니면 pass
  // lt쪽은 빼주고 rt쪽은 추가한다
  // 다시 올라가서 비교하다가 rt가 s 문자열 밖으로 나가면 끝
  while (rt < slen) {
    if (compareHash(map, checkmap)) answer.push(lt);
    if (checkmap.get(s[lt]) === 1) checkmap.delete(s[lt]);
    else checkmap.set(s[lt], checkmap.get(s[lt]) - 1);
    lt += 1;
    rt += 1;
    if (checkmap.has(s[rt])) checkmap.set(s[rt], checkmap.get(s[rt]) + 1);
    else checkmap.set(s[rt], 1);
  }
  return answer;
};
