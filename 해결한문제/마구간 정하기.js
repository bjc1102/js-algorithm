/*
    이분탐색을 접근할 때 인덱스로만 접근한다고 생각해서 어렵게 느껴졌다

    결정 알고리즘을 통헤 몇 문제 풀어봤을 때 값 자체를 접근하여 이분탐색처럼 푼다는 것을
    조금 더 생각해보면 좋지 않았을까 하는 아쉬움이 있따.

    실제 쓰면서 생각해보면 풀이 자체는 쉽게 생각나는데 그걸 알고리즘으로 구현하는게
    아직도 부족하다는 생각이 든다

*/

function count(stable, mid) {
  let counter = 1;
  let ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= mid) {
      // 말을 넣을 수 있다.
      counter += 1;
      ep = stable[i];
    }
  }
  return counter;
}

function solution(c, stable) {
  /*
  각 마굿간은 x좌표를 가지며 배열로 주어진다
  c 마리의 말을 넣을려고 할 떄 가장 가까운 두마리의 말 사이의 거리가 가장 최대가 될때
 
  말들은 가까이 있는 것을 좋아하지 않는다 최대한 말끼리 멀리 떨어뜨리는 것이 목표

  가장 가까운 말들 사이의 거리
   */
  let answer = Number.MIN_SAFE_INTEGER;
  stable.sort((a, b) => a - b);

  // lt는 아무리 작아봐야 바로 옆에 있는게 가장 최소이니 1
  let lt = 1;
  //rt는 아무리 커봐야 stable 배열의 최대 좌표이상으로 벌어질 수 없다
  let rt = Math.max(...stable);

  while (lt <= rt) {
    // 이분검색의 기본
    // mid의 간격보다 커야한다
    const mid = parseInt((rt + lt) / 2);

    // console.log(mid);
    // 첫말은 무조건 맨 앞으로 초기화하면 계산하기 쉽다
    // 중간 값이 결정한다

    const counter = count(stable, mid);

    if (counter >= c) {
      // 마굿간에 3마리가 들어갈 수 있다 사이 거리를 늘려도 된다
      lt = mid + 1;

      answer = Math.max(answer, mid);
    } else {
      // 마굿간에 3마리가 들어갈 수 없다
      rt = mid - 1;
    }
  }

  // mid의 시작부터
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
