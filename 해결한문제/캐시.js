/**
 * 캐시 사이즈와 도시 이름이 들어온다
 * cache hit = 1
 * cache miss = 5
 * 총 실행시간 측정하기
 */

function solution(cacheSize, cities) {
  let answer = 0;
  const cache = Array.from({ length: cacheSize }, () => "");

  for (let i = 0; i < cities.length; i++) {
    const citie = cities[i].toLowerCase();
    const find = cache.indexOf(citie);
    if (find === -1) {
      answer += 5;
      cache.unshift(citie);
      cache.pop();
    } else {
      answer += 1;
      cache.splice(find, 1);
      cache.unshift(citie);
    }
  }
  return answer;
}

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
