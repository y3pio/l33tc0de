/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  const seenMap = new Map();
  const n = grid.length;

  for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
      const currentNum = grid[i][j];

      if (seenMap.has(currentNum)) {
        seenMap.set(currentNum, seenMap.get(currentNum) + 1);
      } else {
        seenMap.set(currentNum, 1);
      }
    }
  };

  const max = n * n;
  let duplicateCandidate;
  let missingCandidate;

  for (let i=1; i<=max; i++) {
    if (!seenMap.get(i)) {
      missingCandidate = i;
    } else if (seenMap.get(i) === 2) {
      duplicateCandidate = i;
    }
  }

  return [duplicateCandidate, missingCandidate]
};