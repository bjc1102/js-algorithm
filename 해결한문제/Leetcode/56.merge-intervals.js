/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 *
 * 문제 그대로 intervals를 합치는 문제이다
 *
 * intervals 배열엔 [시작시간, 끝시간] 이렇게 주어지는데
 * 앞의 배열의 끝나는 지점안에 뒤 배열 시작 시간과 겹친다면 두 배열을 합친다.
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  const len = intervals.length;
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let i = 1;

  while (i < intervals.length) {
    const prev = intervals[i - 1];
    const now = intervals[i];

    //앞이 뒤보다 크거나 같다면
    if (prev[1] >= now[0]) {
      //정렬해서 시작지점이 더 빠를 순 없다
      if (now[1] > prev[1]) intervals[i - 1][1] = now[1];
      intervals.splice(i, 1);
      continue;
    }

    i += 1;
  }
  return intervals;
};
// @lc code=end
