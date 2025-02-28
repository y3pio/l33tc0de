/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
  if (nums.length < 2) {
    return 0;
  }

  let sum = nums[0] + nums[1];
  let count = 0;
  let i = 0;

  while (i < nums.length - 1) {
    const currSum = nums[i] + nums[i+1];
    if (sum !== currSum) {
      return count
    }

    count ++;
    i+=2;
  }

  return count;
};