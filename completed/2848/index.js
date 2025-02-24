/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
  nums.sort((a,b) => a[0] - b[0]);
  let currStart = nums[0][0];
  let currEnd = nums[0][1];
  let count = 0;

  for (let i=1; i<nums.length; i++) {
    const newStart = nums[i][0];
    const newEnd = nums[i][1];

    if (newStart > currEnd) {
      // Start a new interval;
      count += currEnd - currStart + 1;
      currStart = newStart;
      currEnd = newEnd;
    } else if (newStart <= currEnd) {
      currEnd = Math.max(currEnd, newEnd);
    }
  }

  count += currEnd - currStart + 1;

  return count;
};