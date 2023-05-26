/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

var MinStack = function () {
  this.min = Number.MAX_SAFE_INTEGER;
  this.MinStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.min = Math.min(this.min, val);
  this.MinStack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.min === this.MinStack.pop()) this.min = Math.min(...this.MinStack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.MinStack[this.MinStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
