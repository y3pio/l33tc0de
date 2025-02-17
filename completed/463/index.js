/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  const countSurroundingWater = (i,j) => {
    // Check up and down
    let waterCount = 0;
    if (!grid[i-1] || !grid[i-1][j]) {
      waterCount++;
    }
    if (!grid[i+1] || !grid[i+1][j]) {
      waterCount++;
    }

    // Check left and right
    if (!grid[i][j-1]) {
      waterCount++
    }

    if (!grid[i][j+1]) {
      waterCount++;
    }

    return waterCount;
  }

  let parameter = 0;

  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[i].length; j++) {
      if (grid[i][j] === 1) {
        parameter += countSurroundingWater(i,j)
      }
    }
  }

  return parameter;
};