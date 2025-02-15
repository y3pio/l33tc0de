/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let x = 0;
  let y = 0;
  const seen = new Set()
  seen.add(`${x},${y}`)

  const traverse = (dir) => {
    if (dir === 'N') {
      y++
    } else if (dir === 'S') {
      y--;
    } else if (dir === 'E') {
      x++;
    } else {
      x--;
    }

  }

  for(let i=0; i<path.length; i++) {
    traverse(path[i])

    if (seen.has(`${x},${y}`)) {
      return true;
    } else {
      seen.add(`${x},${y}`)
    }
  }

  return false;
};