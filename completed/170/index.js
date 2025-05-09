
var TwoSum = function() {
  this.nums = [];
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.nums.push(number)
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  const compliment = new Set();

  for (let i=0; i<this.nums.length; i++) {
    const n = this.nums[i]
    if (compliment.has(value - n)) {
      return true;
    }

    compliment.add(n);
  }

  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */