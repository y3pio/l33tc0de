/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
  if (arr[0] > arr[1]) {
    arr.reverse();
  }

  let max = -Infinity
  let missingIndex = 0;

  for(let i=0; i<arr.length-1; i++) {
    const diff = arr[i+1] - arr[i];
    if (diff > max) {
      max = diff;
      missingIndex = i;
    }
  };

  return (arr[missingIndex] + arr[missingIndex+1]) / 2
};