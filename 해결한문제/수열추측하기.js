function solution(n, f) {
  /*
    파스칼의 삼각형 맨 윗줄을 구한다.
    맨 윗줄은 n개의 수가 나온다

    맨 윗줄의 수를 구하여라

    예제에서 거꾸로 뒤집어 구한다
    맨 위에 경우부터 채워서 구하는게 맞는거같다 => DFS돌리기 어렵다
    
    왜 1, 3, 3, 1이 오는지 잘 모르겠는데 이항정리라는 고등학교 수학과 관련되어있는거같다
    https://inflearn.com/questions/527118

    결론만 정리해보면 1,2,3,4의 모든 순열을 전부 탐색해서 확인해볼 수 없으니
    3C0, 3C1, 3C2, 3C3이 공식을 사용한다
    */
  let answer;
  //메모이제이션
  const dy = Array.from(Array(12), () => Array(12).fill(0));
  // 순열도 사용? -> 조합을 찾기 위해 3,1,2,4 | 1, 3, 2, 4...
  // 중복 없음
  const ch = Array.from({ length: n + 1 }, (v) => 0);
  //순열을 넣기 위해
  const p = Array.from({ length: n }, (v) => 0);
  // 조합값 nCr
  const b = Array.from({ length: n }, (v) => 0);

  let flag = false;

  //각 combi로 값을 변경해야함
  function combi(n, r) {
    // DFS
    // 조합수 구하기 nCr
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(L, sum) {
    // sum은 모든 값을 더한 값 f가 되어야하는 값이다
    if (flag) return;
    if (L === n) {
      if (sum === f) {
        answer = [...p];
        flag = true;
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1; // 중복없애기
          p[L] = i;
          DFS(L + 1, sum + p[L] * b[L]);
          ch[i] = 0; // 다시 돌려야하니 0으로 초기화
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    //combi에 값 채우기
    b[i] = combi(n - 1, i); // ex) 3C0, 3C1, 3C2... 해서 nCn까지 구해진다
  }

  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
