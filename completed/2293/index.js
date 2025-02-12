/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  let n = nums.length;
  if (n === 1) {
    return nums[0];
  }

  const newNums = [];
  for (let i=0; i<n/2; i++) {
    if (i % 2 === 0) {
      newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1])
    } else {
      newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
    }
  }

  return minMaxGame(newNums);
};