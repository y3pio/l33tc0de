/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
  const zero = []
  const one = []

  nums.forEach(n => {
    if (n%2 === 0) {
      zero.push(0)
    } else {
      one.push(1)
    }
  })

  return [...zero, ...one]
};