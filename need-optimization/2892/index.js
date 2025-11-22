/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minArrayLength = function(nums, k) {
  const res = nums.reduce((acc, n) => {
    if (acc.length < 1) {
      acc.push(n);
      return acc;
    }

    const last = acc.pop();
    if ((last * n) > k) {
      acc.push(last)
      acc.push(n)
    } else {
      acc.push(last*n);
    }

    return acc;
  }, [])

  return res.length;
};