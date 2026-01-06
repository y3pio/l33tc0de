/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  const psnTime = new Set();
  let lastPsn = 0;
  for (t of timeSeries) {
    const start = t < lastPsn ? lastPsn : t;
    const end = t + duration
    for (let i=start; i<end; i++) {
      psnTime.add(i);
      if (i > lastPsn) {
        lastPsn = i;
      }
    }
  }

  return psnTime.size;
};