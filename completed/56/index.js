/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])

  let result = []
  let curr = undefined;
  intervals.forEach(i => {
    if (!curr) {
      curr = i
    } else if (i[0] <= curr[1]) {
      // interval start less than or equal to current tracking end
      // then adjust current tracking end to the larger or the two endings.

      curr[1] = Math.max(curr[1], i[1]);
    } else {
      // interval start is outside of our bounds, start new current tracking.
      result.push(curr);
      curr = i;
    }
  })

  if (curr) {
    result.push(curr);
  }

  return result;
};