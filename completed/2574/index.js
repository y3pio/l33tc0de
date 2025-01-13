/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  const totalSum = nums.reduce((sum, n) => {
    sum += n;
    return sum;
  }, 0);

  const result = [];
  let leftSum = 0;
  let rightSum = totalSum - leftSum;
  nums.forEach(n => {
    result.push(Math.abs(leftSum - (rightSum - n)));
    leftSum += n;
    rightSum -= n;
  });

  return result;
};