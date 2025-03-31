/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function(n, w, maxWeight) {
  let max = n*n*w;
  while(max > maxWeight) {
    max -= w;
  }

  return max/w;
};