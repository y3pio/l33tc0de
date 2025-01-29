/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
  const candidate = {
    index: -1,
    value: Infinity
  }

  for(let i = 0; i<arr.length; i++) {
    if (arr[i] === i && arr[i] < candidate.value) {
      candidate.index = i;
      candidate.value = arr[i];
    }
  }

  return candidate.index;
};