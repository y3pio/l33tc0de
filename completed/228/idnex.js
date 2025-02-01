/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let i = 0;
  let base = i;
  const result = [];
  while(i < nums.length) {
    if (nums[i+1] !== nums[i] + 1) {
      // We reached the end of a sequence;
      if (base === i) {
        result.push(`${nums[base]}`);
      } else {
        result.push(`${nums[base]}->${nums[i]}`);
      }
      base = i+1;
    }

    i++;
  }

  return result;
};