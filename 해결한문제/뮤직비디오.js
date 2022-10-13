// 결정 알고리즘은 자주 나오니 잘 알아둘 것
// 결정 알고리즘 => 이분검색

function count(songs, mid) {
  let sum = 0;
  let cnt = 1;

  for (const num of songs) {
    // 하나의 dvd가 먼저 준비되어야 함
    if (sum + num > mid) {
      cnt += 1;
      //FIXME: 조건이 num을 추가할 수 없으면 현재 num으로 바꿔줘야하는데
      // 0으로 잘 못 초기화해서 들어가야 할 값이 안들어가니 최소값이 잘못나온다
      sum = num; // sum += 가 되면 안된다 sum을 현재 값으로 바꿔줘야한다
    } else sum += num;
  }
  return cnt;
}

function solution(m, songs) {
  /*
    m은 dvd 갯수
    songs는 각 노래의 길이

    최소 answer분(minute)으로 설정해서 m개로 만들 수 있어야 한다(비용 최소화)

    잘라야하는 dvd의 갯수는 정해져있으니 for문 돌리려고 했는데 m개가 random이니 어렵다.
    최소한의 시간과 최대한의 시간 범위를 정해놔야한다 

    결정 알고리즘은 기본이 이분 탐색으로 구현된다

    lt와 rt의 mid값으로 최소시간을 정했을 때 3개 이내로 담을 수 있다면 그건 답이 될 수 있다.
    따라서 rt를 mid - 1로 줄여준다
    
    하지만 3개로 담지 못한다면 answer로 넣지 말고 lt를 mid + 1로 키워준다

    그렇다면 답이 되는 수는 가능한 경우를 계속 넣다가 조건으로 끝나게 될 떄 해당 answer가
    최종적으로 정답이 된다

    구현은 제대로 했는데 아쉽다
    */
  let answer;
  let lt = Math.max(...songs); // 정렬하면 안된다 문제에서 순서대로 유지할 것을 명시했기 때문
  // 배열에서 하나의 원소 최대값만큼이 최소가 될 수 있기 떄문
  let rt = songs.reduce((a, b) => a + b);

  while (lt <= rt) {
    const mid = parseInt((rt + lt) / 2);
    if (count(songs, mid) <= m) {
      // 정답이 될 수 있다.
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  // 내가 푼 풀이
  //   while (lt <= rt) {
  //     //rt가 lt보다 작아지거나 lt가 커지면 종료
  //     const mid = parseInt((lt + rt) / 2);
  //     //mid의 제한만큼 m개로 담기는지 테스트 해봐야한다
  //     let sum = 0;
  //     let flag = 1;
  //     for (let i = 0; i < songs.length; i++) {
  //       //더 들어갈 수 있다
  //       if (sum + songs[i] <= mid) sum += songs[i]; //
  //       else {
  //FIXME:
  //         sum = songs[i];
  //         flag += 1;
  //       }
  //     }
  //     if (flag > m) {
  //       // 불가능하니 lt를 늘려준다(최소 시간을 늘려줌)
  //       lt = mid + 1;
  //     } else if (flag <= m) {
  //       // 가능하다 rt를 줄여준다(최소 시간을 줄여줌)
  //       // 게다가 해당 값이 정답이 될 수 있다는 증거
  //       rt = mid - 1;
  //       answer = mid;
  //     }
  //   }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
