/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
  let total = 1;
  for (let i=1; i<n; i++) {
    total += i * 4;
  }

  return total;
};