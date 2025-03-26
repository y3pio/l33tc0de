/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let max = -1;
  const original = [...arr];
  arr[arr.length-1] = -1;
  for(let i=arr.length-2; i>=0; i--) {
    max = Math.max(max, original[i+1]);
    arr[i] = max;
  }

  return arr;
};