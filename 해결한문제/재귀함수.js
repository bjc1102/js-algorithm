function solution(n) {
  //재귀 함수를 이용하여 1부터 n까지 출력하기

  /*
  재귀함수
  
  자기 함수 몸체에서 자기 자신을 호출한다,
  
  
  스택프레임
  */

  function recursion(n) {
    if (n > 1) recursion(n - 1);
    console.log(n);
  }

  function DFS(L) {
    if (L === 0) return;
    else {
      /* 
    콘솔로그 위치가 바뀌면 출력되는 순서가 바뀌는데 
    이걸 이해하는게 중요 
    
    스택 프레임 : 현재 실행 중인 함수의 정보를 저장
    함수의 매개변수 / 지역변수 / 복귀 주소를 가짐 

    함수가 호출 될 때마다 호출된 함수를 처리하기 위해 점프한다
    이미 함수를 처리하는 중 이었다면 멈추고 호출한 곳으로 간다.
    또 그 함수의 정보를 스택프레임을 저장한다

    이후 호출된 함수를 다 처리하고나면 스택 프레임에서 꺼내고
    다음 스택 프레임 상단에서 처리할 것을 찾는다
    이전 대기시켜놨던 함수의 복귀 주소를 통해 복귀한 부분부터 다시 명령어 처리 시작
    */
      //   console.log(L);
      DFS(L - 1);
      console.log(L);
    }
  }

  recursion(n);
  DFS(n);
}

solution(3);
