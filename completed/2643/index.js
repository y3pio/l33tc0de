/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let maxCandidate = -Infinity;

  const count = mat.reduce((rowCount, row) => {
    let sum = 0;
    for (let i=0; i<row.length; i++) {
      if (row[i] === 1) {
        sum += 1;
      }
    }
    maxCandidate = Math.max(maxCandidate, sum);
    rowCount.push(sum);

    return rowCount;
  }, [])

  return [count.findIndex((e) => e === maxCandidate), maxCandidate]
};
