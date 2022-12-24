/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

var TimeMap = function () {
  this.timeMap = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.timeMap.has(key)) {
    const arr = this.timeMap.get(key);
    arr.push({ value, timestamp });
    this.timeMap.set(key, arr);
  } else this.timeMap.set(key, [{ value, timestamp }]);
  return null;
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  const timestamps = this.timeMap.get(key);
  if (!this.timeMap.has(key) || timestamps[0].timestamp > timestamp) return "";
  const len = timestamps.length;

  let lt = 0;
  let rt = len - 1;
  let mid = 0;

  while (lt <= rt) {
    mid = Math.floor((rt + lt) / 2);
    if (timestamps[mid].timestamp === timestamp) return timestamps[mid].value;
    else if (timestamps[mid].timestamp > timestamp) rt = mid - 1;
    else lt = mid + 1;
  }
  if (timestamps[mid].timestamp > timestamp) return timestamps[mid - 1].value;
  return timestamps[mid].value;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end
