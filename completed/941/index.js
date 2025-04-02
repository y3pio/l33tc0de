/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if (arr.length < 3) {
    return false;
  }

  let i = 0;
  while(arr[i+1] && arr[i] < arr[i+1]) {
    i++;
  }

  if (i === arr.length - 1 || i === 0) {
    // Reached the end, no descend, or did not ascend.
    return false;
  }

  while(i < arr.length - 1) {
    if (arr[i] <= arr[i+1]) {
      return false;
    }
    i++;
  }

  return true;
};