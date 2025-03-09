/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
  let result = 0;
  while (nums.length > 0) {
    const first = nums.shift();
    const last = nums.pop();

    result += parseInt(`${first}${last}`)
  }

  return result;
};