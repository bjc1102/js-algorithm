/**
 * @param {number[]} gain
 * @return {number}
 최대 고도 찾는 문제
 */
var largestAltitude = function (gain) {
  let max = 0;
  let altitude = 0;

  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    max = Math.max(max, altitude);
  }

  return max;
};
