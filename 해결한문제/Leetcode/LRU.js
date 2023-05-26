function solution(size, arr) {
  /*
  카카오 캐시 문제 변형
  LRU 가장 최근에 사용되지 않은 것 제거

  캐시 미스 -> 모든 작업을 뒤로 미루고 캐시가 맨 앞에 위치하게 됨
  캐시 히트 -> 캐시가 있는 경우 해당 작업을 맨 앞으로 처리하고 이후 빈 자리까지 처리

  무조건 첫 번째 자리는 밀려나게 된다 똑같은게 오지 않는 이상
  
  */
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((value, index) => {
    // 하나씩 뒤로 떙기기
    const find = answer.indexOf(value);
    if (find !== -1) {
      answer.splice(find, 1); // index 자리 삭제 splice... slice랑 헷갈렸다
      answer.unshift(value); // 맨 앞에 하나 넣는다
    } else {
      answer.unshift(value);
      answer.pop();
    }
    answer[0] = value;
    console.log(answer);
  });

  // 내장함수로 구현해보기

  // arr.forEach((x) => {
  //   let pos = -1;
  //   for (let i = 0; i < size; i++) {
  //     if (x === answer[i]) {
  //       pos = i;
  //       break;
  //     }
  //   }

  //   if (pos === -1) {
  //     // miss
  //     for (let i = size - 1; i >= 0; i--) {
  //       answer[i] = answer[i - 1];
  //     }
  //     answer[0] = x;
  //   } else {
  //     //hit
  //     for (let i = pos; i >= 0; i--) {
  //       answer[i] = answer[i - 1];
  //     }
  //     answer[0] = x;
  //   }
  // });

  // 내가 푼 풀이 - 자리바꾸면서 가기
  // 삽입 정렬이랑 유사하게 풀었다
  /*
    0부터 출발하도록 구현해서 많이 헷갈렸다
  */
  // arr.forEach((value, index) => {
  //   // 하나씩 뒤로 떙기기
  //   const find = answer.indexOf(value);
  //   if (find !== -1) {
  //     for (let i = find; i >= 1; i--) {
  //       answer[i] = answer[i - 1];
  //     }
  //   } else {
  //     for (let i = size - 1; i >= 1; i--) {
  //       answer[i] = answer[i - 1];
  //     }
  //   }
  //   answer[0] = value;
  //   console.log(answer);
  // });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
