function solution(n) {
  /*
    2로 나눈 나머지를 아래서부터 적는다

    재귀를 돌면서 역순으로 동작하게 할 것인지 정순으로 동작하게 할 것인지를
    재귀 호출하는 부분에서 결정한다.
    */
  let answer = "";

  function DFS(L) {
    if (L === 0) return;
    else {
      // console.log(n % 2); 들어가기 전에 처리 -> 정순으로 간다
      DFS(parseInt(L / 2));
      // console.log(n % 2); 먼저 처리하고 이후에 본인껄 처리 -> 역순으로 간다
      answer += L % 2;
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(11));
