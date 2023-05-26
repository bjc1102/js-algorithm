function solution(n, m) {
  /*
    1부터 n까지의 숫자 중 m개를 뽑는다. 이떄 중복을 허용
    이후 모든 경우의 수를 출력하고 맨 마지막엔 총 경우의 수를 출력한다.
    
    */
  const answer = [];
  const tmp = Array.from({ length: m }, () => 0);

  // 기준을 트리에서 노드의 레벨로 잡아 종료 조건으로 사용할 수 있다.
  // 이 부분을 복잡하게 생각해서 조금 오래걸렸던거같다
  // 변수명을 계속해서 바꿔쓰지말고 통일시켜서 푸는 것도 한가지 좋은 방식이 될거같다
  function DFS(L) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  // 내가 푼 풀이
  //   function DFS(L, tmp) {
  //     if (tmp.length === m) {
  //       answer.push(tmp);
  //     } else {
  //       for (let i = 0; i < n; i++) {
  //         DFS(i, [...tmp, i + 1]);
  //       }
  //     }
  //     // 끝나는 조건은 어떻게 설정할 것인가?
  //   }

  //   DFS(0, []);

  /* 
  만약 for문을 통헤 문제를 풀려고하면 m번만큼 반복을해야하는데 
  그 부분을 동적으로 구현하기가 불가능하다
  */

  return [answer, answer.length];
}

console.log(solution(3, 2));
