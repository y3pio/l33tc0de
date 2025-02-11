/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
  let minResult = Infinity;

  nums.forEach(n => {
    let currSum = 0;
    while (n > 0) {
      const digit = n % 10;
      currSum += digit;
      n = Math.floor(n/10);
    }

    minResult = Math.min(minResult, currSum);
  })

  return minResult;
};