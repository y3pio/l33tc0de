/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  const rowCount = mat.map((row, i) => {
    return {
      count: row.reduce((sum, n) => sum + n),
      index: i
    }
  })

  rowCount.sort((a,b) => a.count - b.count);

  const result = [];
  for(let i=0; i<k; i++) {
    result.push(rowCount[i].index);
  }

  return result;
};