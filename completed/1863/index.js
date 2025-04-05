/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  const n = nums.length;
  let totalXOR = 0;

  const calculateXOR = (index, currentXOR) => {
    if (index === n) {
      totalXOR += currentXOR;
      return;
    }
    // Include nums[index] in the subset
    calculateXOR(index + 1, currentXOR ^ nums[index]);
    // Exclude nums[index] from the subset
    calculateXOR(index + 1, currentXOR);
  };

  calculateXOR(0, 0);
  return totalXOR;
};