function solution(arr) {
  /*
    부분집합이 서로소 일떄 두 부분집합을 합해서 값이 같은 경우가 있으면 YES
    그게 아니라면 NO를 출력한다

    모든 부분집합으 만들고 반대편과 비교
    */

  // 내가 푼 방법
  // 모든 부분집합의 원소 합을 구한 다음에 마지막에 for문을 돌려 합이 같은지 확인했다

  //   let answer = "No";
  //   const len = arr.length;
  //   const check = Array.from({ length: arr.length + 1 }, () => 0);
  //   const sum = [];

  //   function DFS(v) {
  //     if (v > len) {
  //       let tmp = [];
  //       for (let i = 1; i < check.length; i++) {
  //         if (check[i] === 1) tmp.push(arr[i - 1]);
  //       }
  //       sum.push(tmp);
  //     } else {
  //       check[v] = 1;
  //       DFS(v + 1);
  //       check[v] = 0;
  //       DFS(v + 1);
  //     }
  //   }

  //   DFS(1);

  //   const sum_len = sum.length;
  //   for (let i = 0; i < parseInt(sum_len / 2); i++) {
  //     const front = sum[i].reduce((a, b) => a + b, 0);
  //     const back = sum[sum_len - 1 - i].reduce((a, b) => a + b, 0);

  //     if (front === back) {
  //       console.log(sum[i], sum[sum_len - 1 - i]);
  //       answer = "YES";
  //       break;
  //     }
  //   }

  // 접근 방법은 맞았지만 굳이 for문을 돌 필요까진 없었다
  // 재귀를 돌면서 check 배열로 따로 구분한 뒤 검사했는데 그럴 필요없이 바로 검사하면서
  // 변수를 넘기면 된다 => 모두 출력할 필요 없기때문임. 앞전 문제와 조금 변형

  let answer = "NO",
    flag = 0;
  const len = arr.length;
  const total = arr.reduce((a, b) => a + b, 0);

  function DFS(L, sum) {
    if (flag === 1) return;
    if (L === len) {
      //6됐을 때
      if (total - sum === total) answer = "YES";
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
