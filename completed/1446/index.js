/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let currCount = 1;
  let max = 1;

  for (let i=1; i<s.length; i++) {
    if (s[i] !== s[i-1]) {
      max = Math.max(currCount, max)
      currCount = 1;
    } else {
      currCount++;
    }
  }

  max = Math.max(currCount, max)

  return max;
};