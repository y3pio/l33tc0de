/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  return nums.map((e,i,arr) => {
    let count = 0;
    for(let j=0; j<arr.length; j++) {
      if (j !== i && arr[j] < arr[i]) {
        count++;
      }
    }

    return count;
  })
};