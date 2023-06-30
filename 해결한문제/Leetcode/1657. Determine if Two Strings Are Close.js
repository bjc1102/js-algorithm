/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}

 두 문자열이 유사한지 판단하는 문제.
 알파벳이 같아야한다
 알파벳 출연 횟수가 같아야한다. 그래야 각 문자열에 맞게 문자를 변환할 수 있기 때문임
 ex) a->3 b->2 c->1 / b->3 c->2 a->1
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const set1 = new Set(word1);
  const set2 = new Set(word2);

  //set1의 모든 요소가 set2에 존재하는지 확인
  if (![...set1].every((char) => set2.has(char))) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (const char of word1) {
    map1.set(char, (map1.get(char) || 0) + 1);
  }

  for (const char of word2) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }

  //비교를 위해 정렬
  const counts1 = [...map1.values()].sort((a, b) => a - b);
  const counts2 = [...map2.values()].sort((a, b) => a - b);

  //문자열로 변환해서 일치하는지 확인한다
  return counts1.join(",") === counts2.join(",");
};
