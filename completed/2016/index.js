/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let maxDiff = -1;

    for (let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if (nums[i] < nums[j]) {
                maxDiff = Math.max(nums[j] - nums[i], maxDiff);
            }
        }
    }

    return maxDiff;
};
