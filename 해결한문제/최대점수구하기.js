function solution(m, ps, pt) {
  /*
    제한된 M만큼의 시간안에서 어떤 문제를 골라서 풀어야 가장 많은 점수를 얻을 수 있을까
    그 점수를 구하여라

    부분집합 문제인데 인수로 넘어오는게 3개이다
    */
  let answer = Number.MIN_SAFE_INTEGER;
  const len = ps.length;

  function DFS(index, sum, time) {
    if (index >= len) {
      if (time <= m) answer = Math.max(sum, answer);
    } else {
      DFS(index + 1, sum, time);
      DFS(index + 1, sum + ps[index], time + pt[index]);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
