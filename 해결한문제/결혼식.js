function solution(times) {
  /*
    피로연장에 존재할 수 있는 최대치를 구하라
    0시부터해서 72까지 있다
    일단 정렬?
    0부터 72까지 반복문을 돌려서 구한다?
  
  value[0] <= i && i < value[1] 
  위와같이 && 연산자로 묶어줘야하는데
  value[0] <= i < value[1]  바보처럼  이렇게 해놨다

  온 시간과 간 시간을 구분한다
  */
  // 내가 푼 문제 (시간복잡도 상으로 말이 안된다)
  // let answer = Number.MIN_SAFE_INTEGER;
  // const sorted_arr = [...times].sort((a, b) => {
  //   return a[0] - b[0];
  // });

  // for (let i = 0; i < 73; i++) {
  //   let count = 0;
  //   sorted_arr.forEach((value, index) => {
  //     if (value[0] <= i && i < value[1]) {
  //       count += 1;
  //     }
  //   });
  //   answer = Math.max(answer, count);
  // }

  /*
  s를 만나면 무조건 증가
  e를 만나면 무조건 감소

  알파벳 e가 먼저와야 한다
  sort가 많이 헷갈렸다, charCodeAt 아스키코드로 변경

  */
  let answer = Number.MIN_SAFE_INTEGER;
  const TimeLine = [];

  for (const arr of times) {
    TimeLine.push([arr[0], "s"]);
    TimeLine.push([arr[1], "e"]);
  }

  let counter = 0;

  TimeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    return a[0] - b[0];
  }).forEach((value, index) => {
    if (value[1] === "s") counter += 1;
    else counter -= 1;

    answer = Math.max(counter, answer);
  });

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
