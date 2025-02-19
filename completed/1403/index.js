/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  let totalSum = nums.reduce((sum, n) => sum + n, 0);

  nums.sort((a,b) => {
    return a-b
  })

  let subSum = 0;
  const result = []
  while(totalSum >= subSum) {
    const n = nums.pop();
    subSum += n;
    totalSum -=n;
    result.push(n)
  }

  return result;
};