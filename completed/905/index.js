/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  const even = [];
  const odd = []

  nums.forEach(n => {
    if (n % 2 === 0) {
      even.push(n)
    } else {
      odd.push(n)
    }
  })

  return [...even, ...odd]
};