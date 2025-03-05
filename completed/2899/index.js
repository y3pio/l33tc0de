/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
  const seen = [];
  const ans = [];

  let k = 0;
  nums.forEach(n => {
    if (n > -1) {
      k = 0;
      seen.unshift(n)
    } else if (n === -1) {
      k++;
      if (k <= seen.length) {
        ans.push(seen[k-1])
      } else {
        ans.push(-1)
      }
    }
  })

  return ans;
};