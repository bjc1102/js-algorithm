/**
 * 어떤 과학자가 발표한 논문 n편 중,
 * h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면
 * h의 최댓값이 이 과학자의 H-Index입니다.
 */
function solution(citations) {
  let answer = 0;
  const n = citations.length;
  citations.sort((a, b) => b - a);
  const arr = [...citations];

  for (let i = 0; i < n; i++) {
    if (arr[i] < i + 1) return i;
    else answer += 1;
  }
  return answer;
}

console.log(solution([4, 4, 4]));
