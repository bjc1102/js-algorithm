function solution(n) {
  /*
    깊이 우선 탐ㄴ색은 무조건 파고들어간다

    전위 순회와 후위 순회
    전위 순회 = 부모노드 -> 왼쪽 자식 -> 오른쪽 자식
    후위 순회 = 왼쪽 자식 -> 오른쪽 자식 -> 부모노드
    중위 순회 = 왼쪽 자식 -> 부모노드 -> 오른쪽 자식

    왼쪽 자식은 부모노드 * 2
    오른쪽 자식은 부모노드 * 2 + 1이 된다

    호출하는 순서가 중요하다는 것을 잊지 말것

     스택프레임을 그리면서 할 떄는 값과 코드의 라인을 
     작성하는게 훨씬 쉽게 이해할 수 있따

     ex) FIXME: DFS(2: arguments) 13: code Line

    */
  let answer = "";

  function DFS(L) {
    if (L > 7) return;
    else {
      // 전위 순회
      //   answer += L;
      //   DFS(L * 2);
      //   DFS(L * 2 + 1);

      // 중위 순회
      //   DFS(L * 2);
      //   answer += L;
      //   DFS(L * 2 + 1);

      //후위 순회
      DFS(L * 2);
      DFS(L * 2 + 1);
      answer += L;
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(1));
