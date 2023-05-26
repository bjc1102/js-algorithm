function solution(n, k) {
  let answer;
  const queue = Array.from({ length: n }, (v, i) => i + 1);
  /*
  배열에서 n번째가 계속 나가진다
  어떻게 탐색하고 어떻게 원소를 삭제해야할까

  큐 자료구조로 풀면 쉽다.

  꺼내서 넣고 꺼내서 넣고를 반복
  머리로는 안 떠오르다가 그림 그리니까 바로 떠올랐다
*/

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    answer = queue.shift();
  }

  // 내가 푼 풀이
  //   while (queue.length !== 1) {
  //     let count = 1;
  //     while (count < k) {
  //       queue.push(queue.shift());
  //       count++;
  //     }
  //     // 진짜로 빠져야하는 번호
  //     console.log(queue.shift());
  //   }
  //   answer = queue[0];

  return answer;
}

console.log(solution(8, 3));
