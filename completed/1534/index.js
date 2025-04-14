/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

var countGoodTriplets = function(arr, a, b, c) {
  const isValid = (i,j,k) => {
    const x = arr[i];
    const y = arr[j];
    const z = arr[k];
    return Math.abs(x-y) <= a && Math.abs(y-z) <= b && Math.abs(x-z) <= c;
  }

  let result = 0;
  for(let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      for(let k=j+1; k<arr.length; k++) {
        if (isValid(i,j,k)) {
          result++;
        }
      }
    }
  }

  return result;
};