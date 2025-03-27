/**
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.data = [];
  this.total = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.data.push(val)
  this.total += val;
  if (this.data.length > this.size) {
    const removed = this.data.shift();
    this.total -= removed;
  }

  return this.total / this.data.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */