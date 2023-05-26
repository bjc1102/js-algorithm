var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  //맨앞 요소 꺼내서 리턴해야함
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop()); // 역순으로 만들기
  }

  const popElement = this.stack2.pop();

  while (this.stack2.length > 0) {
    // 다시 넣어준다
    this.stack1.push(this.stack2.pop());
  }

  return popElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 맨앞에 있는 요소를 가져와야 함
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop()); // 역순으로 만들기
  }

  const popElement = this.stack2.pop();

  this.stack1.push(popElement);
  while (this.stack2.length > 0) {
    // 다시 넣어준다
    this.stack1.push(this.stack2.pop());
  }

  return popElement;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !(this.stack1.length > 0);
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
