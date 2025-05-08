/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])

  for (let i=0; i<intervals.length - 1; i++) {
    const curr = intervals[i];
    const next = intervals[i+1];

    // If end of one is greater than start of next
    if (curr[1] > next[0]) {
      return false;
    }
  }

  return true;
};