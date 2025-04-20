/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
  let min = Infinity;
  nums.forEach(n => {
    min = Math.min(min, n);
  })

  const minStr = min.toString().split('')
  let sum = 0;
  minStr.forEach(n => {
    sum += parseInt(n);
  })

  return sum % 2 === 0 ? 1 : 0
};