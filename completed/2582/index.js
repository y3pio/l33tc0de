/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  let curr = 1;
  let delta = 1;
  for (let i=0; i<time; i++) {
    if (curr === n) {
      delta = -1;
    } else if (curr === 1) {
      delta = 1;
    }

    curr += delta;
  }

  return curr;
};