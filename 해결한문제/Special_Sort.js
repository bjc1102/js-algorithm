function solution(arr) {
  let answer = arr;
  const len = arr.length;
  /*
  구글 인터뷰 문제

  음의 부호끼리 묶고 양의 부호끼리 좌우로 구분해서 정렬하지만
  기존 배열의 순서 그대로 정렬해야한다.

  버블 정렬 하듯이 그대로 돌면 될듯(맨 뒤가 정렬)
  */
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        // 양수면 뒤로가고 음수면 앞으로 와야함, 음음, 양양끼린 의미없다
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
