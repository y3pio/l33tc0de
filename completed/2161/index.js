/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
  const left = [];
  const right = [];
  const mid = [];

  nums.forEach(n => {
    if (n < pivot) {
      left.push(n)
    } else if (n > pivot) {
      right.push(n)
    } else {
      mid.push(n)
    }
  });

  return [...left, ...mid, ...right]
};