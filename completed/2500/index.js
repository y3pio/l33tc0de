/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
  let maxDeleted = -Infinity;
  let result = 0;
  while(grid[0].length > 0) {
    for(let i=0; i<grid.length; i++) {
      let rowMax = -Infinity;
      let rowMaxIndex = 0;
      for(let j=0; j<grid[i].length; j++) {
        const curr = grid[i][j];
        if (curr > rowMax) {
          rowMax = curr;
          rowMaxIndex = j;
        }
      }

      // Delete from row.
      grid[i].splice(rowMaxIndex, 1);
      maxDeleted = Math.max(rowMax, maxDeleted);
    }

    // After deleting all rows, add to total result;
    result += maxDeleted;
    maxDeleted = -Infinity
  }

  return result;
};