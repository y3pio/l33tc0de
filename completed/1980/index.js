/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
  const max = Math.pow(2, nums.length)
  const seen = new Set();
  nums.forEach(n => {
    seen.add(n)
  });

  for (let i=0; i<max; i++) {
    const ibase2 = i.toString(2).padStart(nums.length, '0');
    if (!seen.has(ibase2)) {
      return ibase2;
    }
  }
};