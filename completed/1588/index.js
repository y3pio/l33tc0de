/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let window = 1;
  let totalSum = 0;
  while(window <= arr.length) {
    let l = 0;
    let r = l + window;

    while(arr[r-1]) {
      const currSum = arr.slice(l, r).reduce((acc, n) => acc + n);
      totalSum += currSum;
      l++;
      r++;
    }

    window += 2;
  }

  return totalSum;
};
