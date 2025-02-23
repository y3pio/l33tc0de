/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let max = 0;
  let currentAltitude = 0;
  for (let i=0; i<gain.length; i++) {
    const currentGain = gain[i];
    currentAltitude += currentGain;

    max = Math.max(currentAltitude, max);
  }

  return max;
};