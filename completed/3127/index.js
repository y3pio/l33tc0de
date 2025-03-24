/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
  const center = grid[1][1];
  const addColor = (color) => {
    if (color === 'W') {
      whites += 1;
    } else {
      blacks += 1;
    }
  }

  let blacks = 0;
  let whites = 0;
  addColor(center)
  // Upperleft
  addColor(grid[0][0])
  addColor(grid[0][1])
  addColor(grid[1][0])

  if (whites === 1 || blacks === 1 || whites === 0 || blacks === 0) {
    return true;
  }

  // Reset and do upper right
  blacks = 0;
  whites = 0;
  addColor(center)
  addColor(grid[0][1])
  addColor(grid[0][2])
  addColor(grid[1][2])

  if (whites === 1 || blacks === 1 || whites === 0 || blacks === 0) {
    return true;
  }

  blacks = 0;
  whites = 0;
  addColor(center)
  addColor(grid[1][0])
  addColor(grid[2][0])
  addColor(grid[2][1])

  if (whites === 1 || blacks === 1 || whites === 0 || blacks === 0) {
    return true;
  }

  blacks = 0;
  whites = 0;
  addColor(center)
  addColor(grid[1][2])
  addColor(grid[2][1])
  addColor(grid[2][2])

  if (whites === 1 || blacks === 1 || whites === 0 || blacks === 0) {
    return true;
  }

  return false;
};