/**
 * @param {number[]} nums
 * @return {number}
 */

const chooseTwo = (n) => {
  // n choose k formula: n! / k! * (n-k)!
  return (n * (n-1)) / 2
}

var numIdenticalPairs = function(nums) {
  const numMap = new Map();
  for (let i=0; i<nums.length; i++) {
    const n = nums[i];
    if (numMap.has(n)) {
      numMap.set(n, numMap.get(n) + 1);
    } else {
      numMap.set(n, 1)
    }
  }

  let count = 0;

  numMap.values().forEach(v => {
    if (v > 1) {
      count += chooseTwo(v)
    }
  })

  return count;
};