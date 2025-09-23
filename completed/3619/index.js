/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countIslands = function(grid, k) {
  const sumAndZeroIsland = (i,j) => {
    if (!grid[i] || !grid[i][j]) {
      return 0;
    }
    const curr = grid[i][j];
    grid[i][j] = 0;

    return curr +
      sumAndZeroIsland(i-1, j) + //left
      sumAndZeroIsland(i+1, j) + //right
      sumAndZeroIsland(i, j+1) + //up
      sumAndZeroIsland(i, j-1); //down
  }

  let count = 0;
  for (let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[0].length; j++) {
      if (!!grid[i][j]) {
        const sum = sumAndZeroIsland(i,j);
        if (sum % k === 0) {
          count++;
        }
      }
    }
  }

  return count;
};