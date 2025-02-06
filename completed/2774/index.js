/**
 * @param {number} target
 * @return {number}
 */
Array.prototype.upperBound = function(target) {
  let i = this.length - 1;
  while (i >= 0) {
    if (this[i] === target) {
      return i;
    }
    i--;
  }

  return -1;
};


// [3,4,5].upperBound(5); // 2
// [1,4,5].upperBound(2); // -1
// [3,4,6,6,6,6,7].upperBound(6) // 5