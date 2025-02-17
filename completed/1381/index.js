/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.stack = new Array();
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(x)
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  return this.stack.pop() || -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  let i=0;
  while (i < k && i < this.stack.length) {
    this.stack[i] += val;
    i++;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */