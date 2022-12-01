/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 *
 * words 배열과 k 갯수가 주어지는데ㅔ
 * 문자열이 많이 반복된 순서대로 정렬하고 k 갯수만큼 리턴한다.
 *
 * 이때 words는 사전적 순서로 정렬되어야한다
 */
var topKFrequent = function (words, k) {
  const check = [];
  const map = new Map();
  words.sort();

  for (const word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
      check.push(word);
    }
  }

  const sortArray = [...map]
    .sort(([prevKey, prevValue], [currKey, currValue]) => currValue - prevValue)
    .map((v) => v[0]);

  return sortArray.slice(0, k);
};
