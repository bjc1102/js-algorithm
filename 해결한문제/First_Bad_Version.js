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
   *
   * 배열로 생각하다보니 0으로 포인터를 시작하다보니 값이 문제가 생겼다
   */
  return function (n) {
    let lt = 1;
    let rt = n;

    while (lt <= rt) {
      const mid = Math.round((rt + lt) / 2);

      if (isBadVersion(mid) === false) lt = mid + 1;
      else {
        if (isBadVersion(mid - 1) === false) return mid;
        rt = mid - 1;
      }
    }
  };
};
