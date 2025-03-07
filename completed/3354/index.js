/**
 * @param {number[]} nums
 * @return {number}
 */
const simulate = (nums, i, left) => {
  const arr = [...nums];
  const n = arr.length;
  while(i >= 0 && i < n) {

    if (left) {
      i--;
    } else {
      i++;
    }

    if (i < 0 || i >= n) {
      break;
    }

    if (arr[i] > 0) {
      arr[i] = arr[i] - 1;
      left = !left
    }
  }

  return arr.every(n => n === 0)
}

var countValidSelections = function(nums) {
  let result = 0;
  nums.forEach((n, i) => {
    if (n === 0 && simulate(nums, i, true)) {
      result ++;
    }

    if (n === 0 && simulate(nums, i, false)) {
      result ++;
    }
  })
  return result;
};