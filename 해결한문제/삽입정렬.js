function solution(arr) {
  /*
  삽입 정렬이란 현재 index의 값을 복사해놓은 뒤
  이미 정렬시켰던 부분과 비교해가며 현재 인덱스까지 정렬된 부분을 옮긴 뒤
  복사해놓은 인덱스 값을 삽입하는 방식을 말한다
   */
  let answer = arr;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let tmp = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > tmp) {
        // arr[j]가 tmp보다 크면 다음 인덱스로 복사
        // 복사시키면서 정렬해나간다
        arr[j + 1] = arr[j];
      }
      // 그게 아니면 다음 자리에 넣고 종료
      else break;
    }

    // j가 종료된 시점은 tmp에 있는 값보다 작은 것이 되니
    // 그 다음 자리에 넣어야 한다
    arr[j + 1] = tmp;
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
