var RecentCounter = function () {
  this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}

 3초내에 이루어진 전화의 갯수를 반환해야한다
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  // t 시점에 3000밀리초를 벗어나는 전화는 갯수에 포함시키지 않는다
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
