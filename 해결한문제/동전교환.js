function solution(m, arr) {
  /*
    동전을 교환해주는데 가장 적은 수의 갯수로 교환해주려면?
    큰거부터 넣고 큰게 안들어가면 작은거 넣는 방식
  */
  let answer = Number.MAX_SAFE_INTEGER;
  const len = arr.length;

  function DFS(L, sum) {
    // 레벨로 찾는다
    if (sum > m || L >= answer) return;
    if (sum === m) {
      console.log(L);
      answer = Math.min(L, answer);
    } else {
      for (let i = 0; i < len; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);

  // 내가 푼 풀이
  // sum에 현재 값이 들어갈 수 없다면 다음 원소로 하나씩 증가시키면서 탐색
  // 그런데 들어오는 m 값을  변경했더니 call stack이 초과됐다
  // if (check > m) DFS(L + 1, sum); 여기서 값이 무한대로 들어가게 됐다
  // 15, [1, 5, 12] 그리디의 반례인데  내가 DFS처럼 보이는 그리디로 푼 방법이다

  //   let counter = 0; // 처음 동전하나는 무조건 들어간다
  //   const index = arr.length - 1; //2
  //   let flag = 0;

  //   function DFS(L, sum) {
  //     // 반복문에 더 가까운거같다 느낌이
  //     if (flag === 1) return;
  //     if (sum === m) {
  //       answer = Math.min(answer, counter);
  //       flag = 1;
  //     } else {
  //       const check = sum + arr[index - L];
  //       if (check > m) DFS(L + 1, sum);
  //       else {
  //         counter += 1;
  //         DFS(L, check); // sum + check는 불가능..
  //       }
  //     }
  //   }

  //   DFS(0, 0);

  return answer;
}

let arr = [1, 5, 12];
console.log(solution(15, arr));
