/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // 첫번쨰 bad version을 찾아라
    let min;
    let lt = 0;
    let rt = n;
    // false일 때는 계속 붙인다
    while (lt <= rt) {
      const mid = parseInt((rt + lt) / 2);
      if (isBadVersion(mid)) {
        // 만약 true라면 mid값을 최솟값으로 설정하고 다음 이진탐색으로 들어감
        min = mid;
        rt = mid - 1;
      } else {
        // 만약 불량 버전이 아니라면.
        lt = mid + 1;
      }
    }
    return min;
  };
};
