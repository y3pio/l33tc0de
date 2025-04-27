/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let c = [0,0];

  for (let i=0; i<moves.length; i++) {
    const m = moves[i];

    if (m === 'U') {
      c[1] = c[1] + 1
    } else if (m === 'D') {
      c[1] = c[1] - 1
    } else if (m === 'L') {
      c[0] = c[0] - 1
    } else { // R
      c[0] = c[0] + 1
    }
  }

  return c[0] === 0 && c[1] === 0
};