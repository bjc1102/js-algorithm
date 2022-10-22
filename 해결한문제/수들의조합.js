function solution(n, k, arr, m) {
  /*
    N개의 정수가 들어오는데 이떄 K개를 뽑아 그 합이 M의 배수인 경우를 모두 찾기

    L개를 뽑았을 떄 6으로 나누어 떨어지면 true 아니면 false

    이때 조합이기 때문에 경우를 살펴야한다
    */
  let answer = 0;
  const check = Array.from({ length: k }, (v) => 0);
  const len = arr.length;

  function DFS(L, sum, start) {
    if (L === k) {
      console.log(check);
      if (sum % 6 === 0) answer += 1;
    } else {
      for (let i = start; i < len; i++) {
        check[L] = arr[i];
        DFS(L + 1, sum + arr[i], i + 1);
        // 굳이 start  + 1로 넘겨서 이후에 값을 수정하는 것 보단 그냥 i를 넘기는게..
        // ex) L이 0일 때 start가 0이라서 L = 1이 됐을 때 start가 1부터 시작한다
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
