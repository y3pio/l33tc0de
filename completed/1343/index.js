/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  let count = 0;
  let sum = 0
  for(let i=0; i<k; i++) {
    sum+=arr[i];
  }

  if (sum/k >= threshold) {
    count++;
  }

  let l = 0;
  let r = k;

  while(r<arr.length) {
    sum -= arr[l];
    sum += arr[r];

    if (sum/k >= threshold) {
      count++;
    }

    l++;
    r++;
  }

  return count;
};