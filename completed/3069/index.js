/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
  const arr1 = [nums[0]];
  const arr2 = [nums[1]];
  let i = 2;

  while (i < nums.length) {
    if (arr1[arr1.length-1] > arr2[arr2.length-1]) {
      arr1.push(nums[i])
    } else {
      arr2.push(nums[i])
    }
    i++;
  }

  return [...arr1, ...arr2]
};