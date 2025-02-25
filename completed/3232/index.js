/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
  let singleSum = 0;
  let doubleSum = 0;

  nums.forEach(n => {
    if (n < 10) {
      singleSum += n;
    } else {
      doubleSum += n;
    }
  })

  return singleSum !== doubleSum
};