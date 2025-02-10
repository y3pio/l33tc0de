/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
  if (!this.data) {
    this.data = []
  }

  this.data.push(nums);
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
  if (!this.data) {
    return 0;
  }


  return this.data.reduce((sum, nums) => {
    return sum + nums.reduce((nSum, n) => {
      return nSum + n;
    }, 0)
  }, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
  if (!this.data) {
    return '[]'
  }

  return `[${this.data}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */