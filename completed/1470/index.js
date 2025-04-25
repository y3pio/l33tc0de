/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let i = 0;
  let j = i+n;

  const result = [];
  while(j < nums.length) {
    result.push(nums[i]);
    result.push(nums[j]);

    i++;
    j++;
  }

  return result;
};