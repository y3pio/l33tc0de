/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkIncreasing = (nums, start, end) => {
  for (let i=start; i<end; i++) {
    if (nums[i] >= nums[i+1] || nums[i+1] === undefined) {
      return false;
    }
  }

  return true;
}

var hasIncreasingSubarrays = function(nums, k) {
  let i=0;
  while(i < nums.length - k) {
    if (checkIncreasing(nums, i, i+k-1) && checkIncreasing(nums, i+k, i+k+k-1)) {
      return true;
    }
    i++;
  }

  return false;
};