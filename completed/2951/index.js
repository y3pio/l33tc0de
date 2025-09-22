/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
  const peaks = [];

  for (let i=1; i<mountain.length-1; i++) {
    const left = mountain[i-1];
    const curr = mountain[i];
    const right = mountain[i+1];

    if (curr > left && curr > right) {
      peaks.push(i);
    }
  }

  return peaks;
};