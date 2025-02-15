/**
 * @param {number[]} nums
 * @return {number}
 */
const calculateTripletValue = (i,j,k) => {
  return (i-j) * k;
}

var maximumTripletValue = function(nums) {
  let max = - Infinity;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] > 0) {
      for (let j=i+1; j<nums.length; j++) {
        if (nums[i] - nums[j] > 0) {
          for(let k=j+1; k<nums.length; k++) {
            max = Math.max(max, calculateTripletValue(nums[i], nums[j], nums[k]))
          }
        }
      }
    }
  }

  return Math.max(0, max);
};