function solution(m, arr) {
  /*
  저번에 출었던 문제랑 비슷한 문제인데 중복을 허용하지 않는다

  순열하고 조합은 외우다시피 구현할 수 있어야한다
   */

  // 내가 푼 풀이
  let answer = [];
  const len = arr.length;
  const check = Array.from({ length: len }, () => 0);
  const tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L >= m) {
      answer.push([...tmp]);
    } else {
      // 중복을 어떻게 없애야하나
      for (let i = 0; i < len; i++) {
        if (check[i]) continue;
        tmp[L] = arr[i];
        check[i] = 1;
        DFS(L + 1);
        // 동작을 하고 백하는 위치
        check[i] = 0;
      }
    }
  }

  DFS(0);

  return answer;
}

let arr = [3, 6, 9, 5];
console.log(solution(2, arr));
