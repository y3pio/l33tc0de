/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  const isOverlapped = new Set();

  for (let i=0; i<intervals.length; i++) {
    const currInterval = intervals[i];
    for (j=0; j<intervals.length; j++) {
      if (i!==j) {
        if (intervals[j][0] <= currInterval[0] &&
          intervals[j][1] >= currInterval[1]
        ) {
          // overlaps
          isOverlapped.add(i);
        }
      }
    }
  }

  return intervals.length - isOverlapped.size;
};