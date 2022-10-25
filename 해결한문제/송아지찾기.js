function solution(s, e) {
  /*
  앞으로 점프 1, 5
  뒤로 점프 -1

  현수의 위치 s와 송아지 위치 e

  1, 5, -1가면서 도착하는 레벨이 최소 점프값이 된다

    만약 이미 지나갔던 값이면 넣지 않는다
    배열 하나로 푸는 방법도 있다
  */
  let answer = 0;

  //직선의 좌표점으 1부터 10001까지니까 그 점을 벗어나면 필요없다
  //레벨을 구하기 위해 distance 배열을 둬서 계속해서 비교해나간다
  let ch = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  const queue = [s];
  ch[s] = 1;
  distance[s] = 0;

  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 현제 레벨 다음값이 정답인지 확인하는 것이니
      // 레벨을 하나 증가시키고 구한다
      // nx는 다음좌표
      if (nx === e) return distance[x] + 1;
      if (nx > 0 && nx < 10000 && ch[nx] === 0) {
        queue.push(nx);
        ch[nx] = 1;
        distance[nx] = distance[x] + 1;
      }
    }
  }
  // 넣고 빼서 비교하는게 아니라 넣기전에 비교하는게 좋다
  // 내가 짠 코드
  //   let level = 0;
  //   const queue = [s];
  //   const check = [];
  //   const jump = [1, 5, -1];
  //   const len = jump.length;

  //   while (answer === 0) {
  // 레벨로 구하려면 해당 레벨에 있는 데이터를 모두 비워야 레벨을 계산할 수 있다
  // 그래서 한번에 반복문으로 레벨이 같은 큐의 데이터만큼 반복한 다음에 진행해야 한다
  //     const point = queue.shift();
  //     if (!check.includes(point)) check.push(point);
  //     else continue;
  //     if (point === e) {
  //       answer = level;
  //       break;
  //     }
  //     for (let i = 0; i < len; i++) {
  //       queue.push(point + jump[i]);
  //     }
  //   }
  return answer;
}

console.log(solution(8, 3));

// function solution(s, e) {
//   let answer = 0;
//   // 중복은 펼치지 않기 위한 check 배열
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s);
//   ch[s] = 1;
//   let L = 0;
//   while (queue.length) {
//     let len = queue.length;
//     for (let i = 0; i < len; i++) {
//       let x = queue.shift();
//       for (let nx of [x - 1, x + 1, x + 5]) {
//         if (nx === e) return L + 1;
//         if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//           ch[nx] = 1;
//           queue.push(nx);
//         }
//       }
//     }
//     L++;
//   }
//   return answer;
// }

// console.log(solution(5, 14));
