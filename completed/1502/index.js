/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a,b) => a < b ? -1 : 1)
  const progression = arr[1] - arr[0];
  for (let i=1; i<arr.length-1; i++) {
    if (arr[i+1] - arr[i] !== progression) {
      return false;
    }
  }

  return true;
};