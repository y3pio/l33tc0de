/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
  let hourCount = 0;
  for (let h = 0; h < 24; h++) {
    const hh = h.toString().padStart(2, '0');
    if ((time[0] === '?' || time[0] === hh[0]) &&
      (time[1] === '?' || time[1] === hh[1])) {
      hourCount++;
    }
  }

  let minuteCount = 0;
  for (let m = 0; m < 60; m++) {
    const mm = m.toString().padStart(2, '0');
    if ((time[3] === '?' || time[3] === mm[0]) &&
      (time[4] === '?' || time[4] === mm[1])) {
      minuteCount++;
    }
  }

  return hourCount * minuteCount;
};
