/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
  let result = [];

  for (let i=0; i<nums.length; i++) {
    if (nums[i] === 0) {
      result[i] = 0;
    } else {
      let dest = i;
      const direction = nums[i] < 0 ? 'left' : 'right';

      let jump = Math.abs(nums[i]);
      while(jump > 0) {
        if (direction === 'left') {
          dest -= 1;
        } else {
          dest += 1;
        }

        if (dest >= nums.length) {
          dest = 0;
        } else if (dest < 0) {
          dest = nums.length -1;
        }

        jump--;
      }
      result[i] = nums[dest];
    }
  }

  return result;
};