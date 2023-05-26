/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 *
 * intervals 배열엔 start, end가 들어있다
 * 이때 newInterval로 새로운 start와 end가 들어오는데 시간이 오버랩되는 부분을 묶어라
 * 처음 위치는 시작과 newInterval로 찾으면 된다.
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) return [...newInterval];
  let i = 0;
  let begin = 0; // 시작되는 인덱스
  let [nStart, nEnd] = newInterval;
  const answer = [];

  for (; i < intervals.length; i++) {
    const interval = intervals[i];
    // 수정이 시작되는 조건은 기존의 인터벌 시작시간이 새로 들어오는 인터벌의 사이에 있을 떄 발생한다.
    // 따라서 인터벌 전에 있는 조건들은 새로 들어오는 것과는 관련이 없다.
    if (interval[1] < nStart) answer.push(interval);
    else if (nEnd < interval[0]) break;
    else {
      nStart = Math.min(nStart, interval[0]);
      nEnd = Math.max(nEnd, interval[1]);
    }
  }

  answer.push(...intervals.slice(i));

  return answer;
};

// var insert = function (intervals, newInterval) {
//   let [nStart, nEnd] = newInterval;
//   const len = intervals.length;
//   if (len && nEnd < intervals[0][0]) return [newInterval, ...intervals];
//   const answer = [];
//   let i = 0;

//   //시작 위치 찾기
//   for (; i < len; i++) {
//     if (
//       (intervals[i][0] <= nStart && nStart <= intervals[i][1]) ||
//       (intervals[i][0] <= nEnd && nEnd <= intervals[i][1])
//     ) {
//       nStart = nStart < intervals[i][0] ? nStart : intervals[i][0];
//       answer.push([nStart, 0]);
//       nEnd = nEnd < intervals[i][1] ? intervals[i][1] : nEnd;
//       break;
//     } else answer.push(intervals[i]);
//   }

//   //시작위치가 없다면
//   if (i === len) return [...answer, newInterval]; //전부 탐색했는데 없는 경우는 맨 뒤에 붙는다.

//   //끝나는 위치 찾기
//   for (; i < len; i++) {
//     if (intervals[i][1] > nEnd) {
//       if (intervals[i][0] <= nEnd) {
//         nEnd = intervals[i][1];
//         continue;
//       } else break;
//     }
//   }

//   //남은 배열 자르기
//   answer[answer.length - 1][1] = nEnd;
//   answer.push(...intervals.slice(i));

//   return answer;
// };
