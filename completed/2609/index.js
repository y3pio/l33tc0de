/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
  let candidate = '';
  let max = 0;
  let hasLeadingZero = false;

  for (let i=0; i<s.length; i++) {
    if (s[i] === '0' && !hasLeadingZero) {
      candidate = ''
      hasLeadingZero = true;
    } else if (s[i] === '0' && s[i-1] === '1' && hasLeadingZero) {
      let zero = 0
      let one = 0
      for (let i=0; i<candidate.length; i++) {
        if (candidate[i] === '0') {
          zero++;
        } else {
          one++;
        }
      }

      const balanced = Math.min(zero, one);
      max = Math.max(max, balanced*2);
      candidate = '';
    }

    candidate += s[i]
  }

  let zero = 0
  let one = 0

  for (let i=0; i<candidate.length; i++) {
    if (candidate[i] === '0') {
      zero++;
    } else {
      one++;
    }
  }

  const balanced = Math.min(zero, one);

  return Math.max(max, balanced*2);
};