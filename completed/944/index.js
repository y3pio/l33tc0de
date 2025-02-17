/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
  let count = 0;
  const n = strs.length;
  const m = strs[0].length;
  for(let col=0; col<m; col++) {
    for(let row=0; row<n; row++) {
      if (strs[row-1] && strs[row][col] < strs[row-1][col]) {
        count++;
        break;
      }
    }
  }
  return count;
};