function solution(arr) {
  /*
    선택 정렬이란 최솟값부터 하나씩 위치 변경을 시켜주는 것이다
    이중for문을 돌면서 i번 위치에 올 최솟값, i + 1 위치에 올 최솟값... 
    이렇게 정렬시켜나간다
  */
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    // i의 이전 배열위치는 건드리지않고 넘어가야한다.
    let idx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j; // 자리바꾸기
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
    // let tmp = arr[i];
    // arr[i] = arr[idx];
    // arr[idx] = tmp;
  }

  return answer;
}

let arr = [13, 5, 66, 11, 7, 23, 15];
console.log(solution(arr));
