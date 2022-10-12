function solution(meeting) {
  /*
  가장 많은 회의를 할 수 있는 시간표를 만들어라

  정렬해서 가장 시간차가 작은거부터 넣는다?
   ====> 회의가 끝나는 시간이 빠른 순서대로 넣는게 중요함


  갯수를 반환하는 것이 문제의 정답이니까
  최대 효율을 뽑을 수 있는 조건이 분명히 있는데 그걸 찾는게 중요한거 같다.

  그리디 문제 중 가장 대표적인 문제임
  그리디는 정렬이 중요함
   */

  // 내가 푼 풀이
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]; // 끝나는 시간이 같으면
    return a[1] - b[1];
  });

  console.log(meeting);
  let endTIme = 0;
  meeting.forEach((v, index) => {
    if (endTIme <= v[0]) {
      answer += 1;
      endTIme = v[1];
      console.log(v);
    }
  });

  return answer;
}

let arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(arr));
