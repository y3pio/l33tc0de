/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  let result = '';

  for (let i=0; i<time.length; i++) {
    if (time[i] === '?') {
      // Check different scenarios;

      // first hr digit
      if (i === 0) {
        // If ones hr digit is free or less than 3, then we can max it to 2x hr.
        if (time[1] === '?' || parseInt(time[1]) <= 3 ) {
          result += '2';
        } else {
          result += '1';
        }
      }

      // second hr digit
      if (i === 1) {
        if (result[0] === '2') {
          result += '3'
        } else {
          result += '9'
        }
      }

      if (i === 2) {
        result += ':'
      }

      // first min digit
      if (i === 3) {
        result += '5'
      }

      if (i === 4) {
        result += '9';
      }
    } else {
      result += time[i];
    }
  }

  return result;
};