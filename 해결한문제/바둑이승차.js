function solution(c, arr) {
  /*
    트럭에 태울 수 있는 최대 무게

    이것도 이진트리로 탐색해서 무게 중 최댓값을 저장하는 방식

    부분집합 문제가 많이 나오니까 잘 살펴보자
    */
  let answer = Number.MIN_SAFE_INTEGER;
  const len = arr.length;

  function DFS(index, sum) {
    if (index >= len) {
      if (sum <= c) answer = Math.max(answer, sum);
    } else {
      // 현재 인덱스가 포함되는 경우
      DFS(index + 1, sum + arr[index]);
      DFS(index + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
