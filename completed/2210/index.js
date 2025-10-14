/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
  const compressed = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== compressed[compressed.length - 1]) {
      compressed.push(nums[i]);
    }
  }

  let count = 0;
  for (let i = 1; i < compressed.length - 1; i++) {
    const curr = compressed[i];
    const left = compressed[i - 1];
    const right = compressed[i + 1];

    if ((curr > left && curr > right) || (curr < left && curr < right)) {
      count++;
    }
  }

  return count;
};