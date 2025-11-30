/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
  const n = nums.length;
  const leftMin = new Array(n);
  const rightMin = new Array(n);

  // Fill leftMin: leftMin[i] = min of nums[0..i-1]
  leftMin[0] = Infinity;
  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i - 1]);
  }

  // Fill rightMin: rightMin[i] = min of nums[i+1..n-1]
  rightMin[n - 1] = Infinity;
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i + 1]);
  }

  let ans = Infinity;
  for (let j = 1; j < n - 1; j++) {
    if (leftMin[j] < nums[j] && rightMin[j] < nums[j]) {
      ans = Math.min(ans, leftMin[j] + nums[j] + rightMin[j]);
    }
  }

  return ans === Infinity ? -1 : ans;
};
