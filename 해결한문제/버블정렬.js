function solution(arr) {
  /**
   버블 정렬이란 이웃한 두 수끼리 비교해서 바꿔준다
    오름차순으로 정렬

    버블 정렬은 맨 뒷자리가 결정된다
    오름차순에선 가장 큰 수가 맨 뒷자리로와 정해진다

    따라서 맨 뒤를 하나씩 줄이면서 더하면 된다.
    i가 0일땐 맨 뒤까지
    i가 1일땐 맨 뒤 - 1
    i가 2일땐 맨 뒤 - 2..
    
    이런 방식으로 진행된다
   */
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      // arr.length - i - 1까지 도는 이유는
      // 다음 인덱스와 비교하기 때문에 마지막 인덱스자리는 가져오기만 하면 된다
      // i가 커질수록 작아진다
      if (arr[j] > arr[j + 1]) {
        // let tmp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = tmp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
